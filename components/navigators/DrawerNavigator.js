import { createDrawerNavigator } from '@react-navigation/drawer';
import MovieList from '../MovieList';
import Settings from '../Settings';
import StackNavigator from './StackNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
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
      <Drawer.Screen name="Movie List" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}