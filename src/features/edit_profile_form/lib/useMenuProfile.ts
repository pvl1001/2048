import {select, useAppDispatch, useAppSelector} from "app/store";
import {FormEvent, Ref, useRef, useState} from "react";
import getGeneratedValue from "shared/lib/GetGeneratedValue";
import {TAvatarName, thunkSetProfile} from "shared/model/profile";
import {TForm} from "../types";
import {useCheckName, UseCheckName} from "./useCheckName";


export type UseMenuProfile = {
    validation: boolean
    onChange: (value: string, nameKey: keyof TForm) => void
    onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>
    error: string
    generateName: () => void
    inputRef: Ref<HTMLInputElement>
    isPending: boolean
    nameValue: string
    avatarId: TAvatarName
}

function useMenuProfile(): UseMenuProfile {
    let inputRef = useRef<HTMLInputElement>(null);
    let dispatch = useAppDispatch();
    let profileAvatarId: TAvatarName = useAppSelector(select.profile._avatarId);
    let profileName: string = useAppSelector(select.profile._name);
    let isPendingProfile: boolean = useAppSelector(select.profile._isPending);
    let [profileIsChange, setProfileIsChange] = useState(true);
    let [form, setForm] = useState<TForm>({avatarId: profileAvatarId, name: profileName});
    let {error, isPending: isPendingValidateNickname}: UseCheckName = useCheckName(form.name);
    let validAvatar: boolean = profileAvatarId === form.avatarId;
    let validName: boolean = profileName === form.name;
    let validation: boolean = validAvatar && validName || profileIsChange || !!error;

    function onChange(value: string, nameKey: keyof TForm) {
        setForm(prev => ({...prev, [nameKey]: value}));
        setProfileIsChange(false);
    }

    async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        let avatarId = (!validAvatar ? form.avatarId : '') as TAvatarName;
        let name: string = !validName ? form.name : '';
        dispatch(thunkSetProfile({avatarId, name}));
        setProfileIsChange(true);
    }

    function generateName(): void {
        if (inputRef.current) {
            let generateValue: string = getGeneratedValue();
            let value: string = 'Player_' + generateValue;
            inputRef.current.value = value;
            onChange(value, 'name');
        }
    }

    return {
        validation,
        onChange,
        onSubmit,
        error,
        generateName,
        inputRef,
        isPending: isPendingProfile || isPendingValidateNickname,
        nameValue: form.name,
        avatarId: profileAvatarId,
    };
}

export default useMenuProfile;