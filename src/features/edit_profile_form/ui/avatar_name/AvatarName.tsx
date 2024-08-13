import {forwardRef, InputHTMLAttributes, Ref, useState} from "react";
import classNames from "classnames";
import {MenuTitle} from "shared/ui/menu_title";
import {TooltipError} from "shared/ui/tooltip_error";
import s from "./AvatarName.scss";


type AvatarNameProps = InputHTMLAttributes<HTMLInputElement> & {
    error: string
    generateName: () => void
}

function AvatarName({error, generateName, ...inputProps}: AvatarNameProps, ref: Ref<HTMLInputElement>) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <div className={s._}>
            <MenuTitle className={s.title}>Choose name:</MenuTitle>

            <fieldset>
                <p className={s.label}>Enter your name or generate a random one*</p>
                <div className={classNames(s.input_container, (isFocus || error) && s.focus)}>
                    <input
                        ref={ref}
                        type="text"
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        {...inputProps}
                    />
                    {error
                        ? <TooltipError className={s.tooltip_error} content={error}/>
                        : <div className={s.arrow_button} onClick={generateName}/>
                    }
                </div>
            </fieldset>
        </div>
    );
}

export default forwardRef(AvatarName);