import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieList from '../MovieList';
import MovieItemDetail from '../MovieItemDetail';
import MovieItem from '../MovieItem';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
        <Stack.Screen name="Stack Movie List" component={MovieList}  options={{headerShown: false}} />
        <Stack.Screen name="Movie Details" component={MovieItemDetail}/>
      </Stack.Navigator>
  );
};