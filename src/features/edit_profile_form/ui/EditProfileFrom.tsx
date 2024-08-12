import {ChangeEvent} from "react";
import {avatarNames} from "shared/lib/avatarNames";
import {TAvatarName} from "shared/model/profile";
import {Button} from "shared/ui/button";
import useMenuProfile, {UseMenuProfile} from "../lib/useMenuProfile";
import AvatarCard from "./avatar_card/AvatarCard";
import AvatarName from "./avatar_name/AvatarName";
import s from "./EditProfileForm.scss";


type Props = {
    onCloseMenu: () => void
}

export function EditProfileFrom({onCloseMenu}: Props) {
    let {validation, onChange, onSubmit, error, generateName, inputRef, isPending, nameValue, avatarId}: UseMenuProfile = useMenuProfile();

    return (
        <form onSubmit={onSubmit} className={s.form}>
            <fieldset className={s.list}>
                {avatarNames.map((avatarName: TAvatarName) =>
                    <AvatarCard
                        key={avatarName}
                        value={avatarName}
                        defaultChecked={avatarName === avatarId}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'avatarId')}
                    />
                )}
            </fieldset>

            <AvatarName
                ref={inputRef}
                value={nameValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value, 'name')}
                error={error}
                generateName={generateName}
            />

            <div className={s.buttons}>
                <Button onClick={onCloseMenu}>Cancel</Button>
                <Button
                    theme={'orange'}
                    type={'submit'}
                    isPending={isPending}
                    disabled={validation}
                >Save</Button>
            </div>
        </form>

    );
}
