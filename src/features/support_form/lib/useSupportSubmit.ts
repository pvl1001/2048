import {useState} from "react";
import {RoutePaths} from "shared/common/RoutePaths";
import {getFormWithSelect} from "shared/lib/getFormWithSelect";
import {useNavigateModal} from "shared/lib/hooks";
import {Api} from "../api/Api";
import {TSupportFile, TSupportForm} from "../types";
import {FaqCategory} from "./consts";


export type UseSupportSubmit = {
    isPending: boolean
    onSubmit: (values: TSupportForm) => Promise<void>
}

export function useSupportSubmit(files: TSupportFile[]) {
    let {navigateModal, navigateModalError} = useNavigateModal();
    let [isPending, setIsPending] = useState(false);

    function readFileAsBuffer(file: File): Promise<string> {
        return new Promise((resolve) => {
            let reader = new FileReader();
            reader.onload = (event) => {
                let buffer: ArrayBuffer | string = event.target?.result ?? '';
                resolve(Api.uploadFile(file.name, buffer));
            };
            reader.readAsArrayBuffer(file);
        });
    }

    async function onSubmit(values: TSupportForm) {
        let {category, question, email} = getFormWithSelect(values);

        try {
            setIsPending(true);

            let uploadTokens: string[] = await Promise.all(
                files.map(async ({file}) => await readFileAsBuffer(file))
            );

            await Api.postTicket({
                ticket: {
                    subject: category as FaqCategory,
                    id: email,
                    comment: {
                        body: question,
                        uploads: uploadTokens
                    }
                }
            });
            navigateModal(RoutePaths.SUPPORT_SUCCESS);
        } catch (err) {
            navigateModalError(err);
        } finally {
            setIsPending(false);
        }
    }

    return {
        isPending,
        onSubmit,
    };
}
