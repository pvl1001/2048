import React, {PropsWithChildren, ReactNode} from "react";
import cn from "classnames";
import {useNavigateModal} from "shared/lib/hooks";
import {CloseButton} from "shared/ui/close_button";
import {ModalWrapper} from "shared/ui/modal";
import {Time} from "shared/ui/time";
import s from "./BigModal.scss";
import {BigModalTitles} from "../lib/const";


type Props = {
    title: BigModalTitles
    description: string
    action: ReactNode
    contentClass?: string
    wasPrice?: string
    time?: string
}

export function BigModal({children, title, description, action, contentClass, wasPrice, time}: PropsWithChildren<Props>) {
    const {closeModal} = useNavigateModal();

    return (
        <ModalWrapper className={cn(s._, {
            [s._level_progress]: title === BigModalTitles.LEVEL_PROGRESS,
            [s._special_offer]: title === BigModalTitles.SPECIAL_OFFER,
            [s._happy_offer]: title === BigModalTitles.HAPPY_OFFER,
            [s._lucky_offer]: title === BigModalTitles.LUCKY_OFFER,
            [s._just_for_you]: title === BigModalTitles.JUST_FOR_YOU_OFFER,
        })}>
            <CloseButton className={s.close_button} onClick={closeModal}/>

            <div className={cn(s.content, contentClass)}>
                <div className={s.title_box}>
                    {time && <Time className={s.time}>{time}</Time>}
                    <h2 className={s.title} data-before={title}>{title}</h2>
                    <p className={s.description}>{description}</p>
                </div>

                <div className={s.container}>
                    {children}
                </div>
            </div>

            {wasPrice &&
                <p className={s.was_price}>
                    Was <span className={s.was_price__value}>{wasPrice}</span>
                </p>
            }

            <div className={s.button}>
                {action}
            </div>
        </ModalWrapper>
    );
}
