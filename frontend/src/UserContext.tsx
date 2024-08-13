import { createContext } from "react";
import { useCookies } from "react-cookie";
import Login from "./page/Login";
import { Route } from "react-router-dom";

const UserContext = createContext(null as any);

const UserProvider = ({children}:any) => {
    const [token, setToken] = useCookies(["token"]);

    if(!token) return (
        <>
        <Route path="/login" element={<Login/>}/>
        </>
    )

    return (
      <UserContext.Provider value={token}>
        {children}
      </UserContext.Provider>
    )
}

export {UserProvider, UserContext};
