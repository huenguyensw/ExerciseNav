import React, {useContext} from 'react'
import { Button, StyleSheet, Text, View} from 'react-native'
import { AuthContext } from './contexts/AuthProvider'
import { useNavigation } from '@react-navigation/native';

export default function Logout() {
    const navigation = useNavigation();
    const {handleLogout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <Text style={styles.question}>Are you sure to log out the system?</Text>
        <Button title='OK' onPress={()=>handleLogout()}></Button>
        <Button title='Cancel' onPress={()=>navigation.navigate('Movie List')}></Button>
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    flexDirection: 'column',
    rowGap: 20,
    alignContent: 'center',
    marginTop: '30%',
  },
  question: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '400',
  }

})
