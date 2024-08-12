import {ModalSuccess} from "./ModalSuccess";


export function RegistrationSuccess() {
    // let {buyItem}: UseGetCurrency = useGetCurrency();
    // let {navigateEventModal}: UseNavigateModal = useNavigateModal();
    //
    // function afterRegistration() {
    //     // buyItem(BuyStore.ID_REG_REWARD, RoutePaths.TUTORIAL);
    // }

    // useEffect(() => () => {
    //     RegistrationUtils.removeIsLogout();
    // }, []);

    return (
        <ModalSuccess
            // unmounted={afterRegistration}
            message={<>You have successfully registered<br/>Have a nice game!</>}
            buttonText={'Thanks'}
        />
    );
}
