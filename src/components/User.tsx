import { useContext } from "react";
import { UserContext } from "../context/userContext";

const User = () => {
    const { user, login } = useContext(UserContext)

    if(!user){
        return(
            <button onClick={login}>Login</button>
        );
    }
    return(
        <div>
            { user?.name }
        </div>
    );
}

export default User;