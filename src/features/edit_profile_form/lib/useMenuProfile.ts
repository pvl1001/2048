import {FormEvent, Ref, useRef, useState} from "react";
import {select, useAppDispatch, useAppSelector} from "app/store";
import getGeneratedValue from "shared/lib/GetGeneratedValue";
import {TAvatarName, thunkSetProfile} from "shared/model/profile";
import {useCheckName, UseCheckName} from "./useCheckName";
import {TForm} from "../types";


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
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const profileAvatarId: TAvatarName = useAppSelector(select.profile._avatarId);
    const profileName: string = useAppSelector(select.profile._name);
    const isPendingProfile: boolean = useAppSelector(select.profile._isPending);
    const [profileIsChange, setProfileIsChange] = useState(true);
    const [form, setForm] = useState<TForm>({avatarId: profileAvatarId, name: profileName});
    const {error, isPending: isPendingValidateNickname}: UseCheckName = useCheckName(form.name);
    const validAvatar: boolean = profileAvatarId === form.avatarId;
    const validName: boolean = profileName === form.name;
    const validation: boolean = validAvatar && validName || profileIsChange || !!error;

    function onChange(value: string, nameKey: keyof TForm) {
        setForm(prev => ({...prev, [nameKey]: value}));
        setProfileIsChange(false);
    }

    async function onSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        const avatarId = (!validAvatar ? form.avatarId : '') as TAvatarName;
        const name: string = !validName ? form.name : '';
        dispatch(thunkSetProfile({avatarId, name}));
        setProfileIsChange(true);
    }

    function generateName(): void {
        if (inputRef.current) {
            const generateValue: string = getGeneratedValue();
            const value: string = 'Player_' + generateValue;
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