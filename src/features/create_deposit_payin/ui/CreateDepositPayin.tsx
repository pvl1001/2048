import {useState} from "react";
import {PromotionsSku} from "entities/promotion_card";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {useNavigateModal} from "shared/lib/hooks";
import {Button} from "shared/ui/button";
import {Api} from "../api/Api";


type Props = {
    isCheck: boolean
    sku: PromotionsSku
    className?: string
}

export function CreateDepositPayin({isCheck, sku, className}: Props) {
    const [isPending, setIsPending] = useState(false);
    const {navigateModalError, closeModal} = useNavigateModal();

    async function createPayIn() {
        try {
            setIsPending(true);
            const url: string = await Api.createPromotionPayIn(sku);
            window.open(url, '_blank');
            closeModal();
        } catch (err: unknown) {
            console.log(getErrorMessage(err));
            navigateModalError(err);
        }
    }

    return (
        <Button
            theme={'orange'}
            className={className}
            onClick={createPayIn}
            disabled={!isCheck}
            isPending={isPending}
        >Checkout</Button>
    );
}
