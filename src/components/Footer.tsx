// import { useContext } from "react";
// import { UserContext } from "../context/userContext";

type Props = {
    onClick: () => void;
}

const Footer = ({onClick}: Props) => {
    // User ne s'affichera jamais car on a pas accès au contexte dans ce composant
    // Cannot use context out of Context
    // const { user } = useContext(UserContext);

    return(
        <div className="footer" onClick={onClick}>
            Footer
            {/* {user?.name} */}
        </div>
    )
}

export default Footer;