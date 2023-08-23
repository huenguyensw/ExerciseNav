import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieList from '../MovieList';
import MovieItemDetail from '../MovieItemDetail';
import { useNavigation } from '@react-navigation/native';
import Home from '../Home';

const Stack = createNativeStackNavigator();

export default function StackNavigator( ) {
  const navigator = useNavigation();
  return (
    
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        {/* <Stack.Screen name="Stack Movie List" component={MovieList}  options={{headerTitle: ()=> <Header name="Movie List" navigation={navigator} />}} /> */}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Stack Movie List" component={MovieList} options={{headerShown: false}}/>
        <Stack.Screen name="Movie Details" component={MovieItemDetail} />
      </Stack.Navigator>
  );
};