import { createContext, useState } from "react";

export type User = {
    name: string;
    isAdmin: boolean;
};

export type UserContextType = {
    user?: User;
    login?: () => void;
}

export const UserContext = createContext<UserContextType>({});

type Props = {
    children: React.ReactNode;
}

export const UserContextProvider = ({children}: Props) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    const login  = () => {
        setUser({
            name: "Raymond",
            isAdmin: true,
        })
    }

    const value = { user, login };

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}