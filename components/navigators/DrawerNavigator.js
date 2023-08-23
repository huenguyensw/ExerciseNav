import { createDrawerNavigator } from '@react-navigation/drawer';
import { useEffect } from 'react';
import StackNavigator from './StackNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import Logout from '../Logout';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

  const navigation = useNavigation();
  useEffect(() => {
    //setting Movie List page is opened by default when accessing DrawerNavigator.
    navigation.navigate('Movie List');
  }, []);
  
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      {/* <Drawer.Screen name="Login" component={Login}/> */}
      <Drawer.Screen name="Movie List" component={StackNavigator}/>
      <Drawer.Screen name="Settings" component={BottomTabNavigator} />
      <Drawer.Screen name="Logout" component={Logout} options={{headerShown: false}}/>
      
    </Drawer.Navigator>
  );
}