import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../Settings';
import Contact from '../Contact';
import Payment from '../Payment';
import { Feather, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings Stack" component={Settings} options={{
        headerShown: false,
        tabBarIcon: ({color,size}) => 
        <Feather name="settings" size={size} color={color} />,
        title:'',  
      }} />
      <Tab.Screen name="Contact" component={Contact} 
      options={{
        headerShown: false,
        tabBarIcon: ({color, size})=> <AntDesign name="contacts" size={size} color={color} />,
        title: '',
      }}/>
      <Tab.Screen name="Payment" component={Payment} 
      options={{
        headerShown: false,
        tabBarIcon: ({color, size})=> <Feather name="credit-card" size={size} color={color}/>,
        title: '',
      }}/>
    </Tab.Navigator>
  );
}