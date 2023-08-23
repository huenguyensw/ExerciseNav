import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [accessToken, setAccessToken] = useState(null);

  const handleLogin = async() =>{
    try{
      await AsyncStorage.setItem('accessToken', 'something');
      setAccessToken('something');
    }
    catch(error){
      console.log(error);
    }
  }

  const handleLogout = async() =>{
    try{
      await AsyncStorage.removeItem('accessToken')
      setAccessToken(null);
    } catch(error){
      console.log(error)
    }
  }

  const isLoggedIn = async() =>{
    try{
      const token = await AsyncStorage.getItem('accessToken');
      setAccessToken(token);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    isLoggedIn();
  },[])
  return (
    <AuthContext.Provider value={{accessToken,handleLogin,handleLogout}}>
        {children}
    </AuthContext.Provider>
  )
}
