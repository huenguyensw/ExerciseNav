import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import StackNavigator from './components/navigators/StackNavigator';
import DrawerNavigator from './components/navigators/DrawerNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <StackNavigator/> */}
        <DrawerNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
