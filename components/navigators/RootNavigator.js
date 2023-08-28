import React, {useContext, useState} from 'react'
import AppNavigator from './AuthNavigator';
import AuthNavigator from './AuthNavigator';
import StackNavigator from './StackNavigator';
import { AuthContext } from '../contexts/AuthProvider';
import DrawerNavigator from './DrawerNavigator';


export default function RootNavigator() {
    const {accessToken} = useContext(AuthContext)

  return (
    <>
    {accessToken !== null
    ? <DrawerNavigator/>
    : <AuthNavigator/>
    }
    </>
  )
}
