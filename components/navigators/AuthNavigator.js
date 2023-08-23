import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import Register from '../Register';

const Stack = createNativeStackNavigator();

export default function AuthNavigator( ) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} />
        
      </Stack.Navigator>
  );
};