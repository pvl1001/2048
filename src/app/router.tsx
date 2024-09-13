import cn from "classnames";
import {ModalWithdraw} from "features/withdraw_forms";
import {MainPage} from "pages/main_page";
import {createBrowserRouter} from "react-router-dom";
import {RoutePaths} from "shared/common/RoutePaths";
import {ProtectedRoute} from "shared/lib/hocs";
import {thunkGetGlobalConfig} from "shared/model/global_config";
import {ErrorBoundary} from "shared/ui/error_boundary";
import {Modal} from "shared/ui/modal";
import s from 'shared/ui/modal/ui/Modal.module.scss';
import {ModalCube} from "shared/ui/modal_cube";
import * as Modals from 'widgets/modals';
import {Warnings} from "widgets/modals/modal_warning";
import {Layout} from "./Layout";
import {store} from "./store";


export const router = createBrowserRouter([
    {
        Component: Layout,
        errorElement: <ErrorBoundary/>,
        loader: () => store.dispatch(thunkGetGlobalConfig()),
        children: [
            {
                path: '/',
                element: <MainPage/>,
                children: [
                    {
                        path: RoutePaths.SUCCESS,
                        element: <Modal title={'Great!'} withMascot><Modals.ModalSuccess/></Modal>,
                    },
                    {
                        path: RoutePaths.SUPPORT,
                        element: <Modal title={'Support'} disabledEventOverlay><Modals.ModalSupport/></Modal>,
                    },
                    {
                        path: RoutePaths.SUPPORT_SUCCESS,
                        element: <Modals.SupportSuccess/>,
                    },
                    {
                        path: RoutePaths.HOW_TO_PLAY,
                        element: <Modals.ModalHowToPlay/>,
                    },
                    {
                        path: RoutePaths.ERROR,
                        element: <Modal title={'Error!'} className={s.modal_error}><Modals.ModalError/></Modal>,
                    },
                    {
                        path: RoutePaths.ERROR,
                        element: <Modal title={'Error!'} className={s.modal_error}><Modals.ModalError/></Modal>,
                    },
                    {
                        path: RoutePaths.ACC_FROZEN,
                        element: <Modal title={'oops...'}><Modals.ModalWarning theme={Warnings.FROZEN}/></Modal>,
                    },
                    {
                        path: RoutePaths.LEVEL_PROGRESS,
                        element: <Modals.LevelProgress/>
                    },
                    {
                        path: RoutePaths.REFUND,
                        element: <Modal title={'Tournament disbanded'}><Modals.ModalRefund/></Modal>,
                    },
                    // {
                    //     path: RoutePaths.TUTORIAL,
                    //     element: <Modal title={'Welcome!'} disabledEventOverlay className={s.modal_welcome}><Modals.ModalWelcome/></Modal>,
                    // },

                    /*Не авторизованный*/
                    {
                        element: <ProtectedRoute isAuth={false}/>,
                        children: [
                            {
                                path: RoutePaths.REGISTER_NOW,
                                element: <ModalCube><Modals.RegisterNow/></ModalCube>,
                            },
                            {
                                path: RoutePaths.LOGIN,
                                element: <Modal title={'Existing user login'}><Modals.ModalLogin/></Modal>,
                            },
                            {
                                path: RoutePaths.REGISTRATION,
                                element: <Modal title={'Registration'}><Modals.ModalRegistration/></Modal>,
                            },
                            {
                                path: RoutePaths.ERR_REGION,
                                element: <Modal title={'oops...'}><Modals.ModalWarning theme={Warnings.REGION}/></Modal>,
                            },
                        ]
                    },
                    /*Авторизованный*/
                    {
                        element: <ProtectedRoute isAuth={true}/>,
                        children: [
                            {
                                path: RoutePaths.LEVEL_UP,
                                element: <Modals.LevelUp/>
                            },
                            {
                                path: RoutePaths.DAILY_REWARDS,
                                element: <Modals.DailyRewards/>,
                            },
                            {
                                path: RoutePaths.WITHDRAW,
                                children: [
                                    {
                                        index: true,
                                        element: <Modal title={'Withdraw'} className={cn(s.modal_withdraw, s._bank)}><ModalWithdraw.Bank/></Modal>,
                                    },
                                    {
                                        path: RoutePaths.WITHDRAW_FORM,
                                        element: <Modal title={'Withdraw'} className={cn(s.modal_withdraw, s._form)}><ModalWithdraw.Form/></Modal>,
                                    },
                                ]
                            },
                            {
                                path: RoutePaths.DEPOSIT_INFO,
                                element: <Modal title={'Deposit information'} className={s.modal_deposit}><Modals.ModalDepositInfo/></Modal>,
                            },
                            {
                                path: RoutePaths.TUTORIAL_REWARD,
                                element: <Modal withMascot title={'Congratulations!'}><Modals.ModalTutorialReward/></Modal>,
                            },
                            {
                                path: RoutePaths.HAPPY_OFFER,
                                element: <Modals.OfferModal/>,
                            },
                            {
                                path: RoutePaths.LUCKY_OFFER,
                                element: <Modals.OfferModal/>,
                            },
                            {
                                path: RoutePaths.SPECIAL_OFFER,
                                element: <Modals.OfferModal/>,
                            },
                            {
                                path: RoutePaths.FOR_YOU_OFFER,
                                element: <Modals.OfferModal/>,
                            },
                            {
                                path: RoutePaths.REGISTRATION_SUCCESS,
                                element: <Modal withMascot title={'Congratulations!'}><Modals.RegistrationSuccess/></Modal>
                            },
                            {
                                path: RoutePaths.TUTORIAL,
                                children: [
                                    {index: true},
                                    {path: RoutePaths.TUTORIAL_GIFT},
                                    {path: RoutePaths.TUTORIAL_TOURNAMENT},
                                ]
                            },
                        ]
                    },

                    // {
                    //    path:RoutePaths.ACC_UNFROZEN,
                    //    element:<Modal title={'Funds unfrozen'}><ModalWarning theme={Warnings.UNFROZEN}/></Modal>,
                    // },
                ]
            },
        ]
    }
], {
    basename: import.meta.env.VITE_BASEPATH
});
