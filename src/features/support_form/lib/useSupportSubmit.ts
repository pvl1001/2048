import {useState} from "react";
import {RoutePaths} from "shared/common/RoutePaths";
import {useNavigateModal} from "shared/lib/hooks";
import {Api} from "../api/Api";
import {TSupportFile, TSupportForm} from "../types";


export type UseSupportSubmit = {
    isPending: boolean
    onSubmit: (values: TSupportForm) => Promise<void>
}

export function useSupportSubmit(files: TSupportFile[]) {
    const {navigateModal, navigateModalError} = useNavigateModal();
    const [isPending, setIsPending] = useState(false);

    function readFileAsBuffer(file: File): Promise<string> {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const buffer: ArrayBuffer | string = event.target?.result ?? '';
                resolve(Api.uploadFile(file.name, buffer));
            };
            reader.readAsArrayBuffer(file);
        });
    }

    async function onSubmit(values: TSupportForm) {
        // const {category, question, email} = getFormWithSelect(values);

        try {
            setIsPending(true);

            // const uploadTokens: string[] = await Promise.all(
            //     files.map(async ({file}) => await readFileAsBuffer(file))
            // );

            // await Api.postTicket({
            //     ticket: {
            //         subject: category as FaqCategory,
            //         id: email,
            //         comment: {
            //             body: question,
            //             uploads: uploadTokens
            //         }
            //     }
            // });
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
