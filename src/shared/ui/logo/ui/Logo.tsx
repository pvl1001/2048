import logo from "shared/assets/images/logo.png";


type LogoProps = {
    className?: string
}

export let Logo = ({className = ''}: LogoProps) => {
    return <img src={logo} className={className} alt={"logo"}/>;
};