import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {useState} from "react";
import {ReactComponent as CheckIcon} from 'shared/assets/icons/check.svg';
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import s from "./PromoCode.scss";


export function PromoCodeCopy() {
    let referralCode: string = useAppSelector(select.profile._referralCode);
    let [isCopied, setIsCopied] = useState(false);

    async function copyHandler() {
        await navigator.clipboard.writeText(referralCode);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    }

    return (
        <div className={cn(s._, s._copy)}>
            <div className={s.text_container}>
                <h5 className={s.title}>
                    Personal promocode
                </h5>
                <p className={s.description}>Tap to copy your code:</p>
            </div>

            <div className={s.field_wrapper}>
                <Input
                    name={'code'}
                    readOnly
                    isBigStyle
                    className={s.field}
                    value={isCopied ? ' ' : referralCode}
                />
                {isCopied &&
                    <div className={s.copied_message}>
                        <CheckIcon/> ID copied to clipboard
                    </div>
                }
            </div>

            <Button
                type={'submit'}
                theme={'orange'}
                className={s.button}
                onClick={copyHandler}
            >
                Copy
            </Button>
        </div>
    );
}
