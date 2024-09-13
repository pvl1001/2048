import {PropsWithChildren} from "react";
import {Link} from "react-router-dom";
import {RoutePaths} from "shared/common/RoutePaths";
import s from "./WithHaveAccount.module.scss";


function WithHaveAccount({children, isHaveAccount}: PropsWithChildren<{isHaveAccount?: boolean}>) {
    return (
        <div className={s._}>

            {children}

            {isHaveAccount && <div className={s.have_account}>
                <span>Do you already have an account?</span>
                <Link to={RoutePaths.LOGIN}>Log in</Link>
            </div>}
        </div>
    );
}

export default WithHaveAccount;