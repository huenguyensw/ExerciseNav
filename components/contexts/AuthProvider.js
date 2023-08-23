import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [accessToken, setAccessToken] = useState(null);

  const handleLogin = () =>{
    setAccessToken('something');
  }

  const handleLogout = () =>{
    setAccessToken(null);
  }
  return (
    <AuthContext.Provider value={{accessToken,handleLogin,handleLogout}}>
        {children}
    </AuthContext.Provider>
  )
}
