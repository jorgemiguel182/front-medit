import { createContext, useContext, useEffect, useState } from "react";

const LoginContext = createContext();

export default function LoginProvider({children}) {
  const [login, setLogin] = useState('');
  useEffect(()=>{
  },[login]);
  return(
    <LoginContext.Provider
      value = {{
        login,
        setLogin
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  const context = useContext(LoginContext);
  const { login, setLogin } = context;
  return { login, setLogin };
}
