import logo from "shared/assets/images/logo.png";


type LogoProps = {
    className?: string
}

export const Logo = ({className = ''}: LogoProps) => {
    return <img src={logo} className={className} alt={"logo"}/>;
};