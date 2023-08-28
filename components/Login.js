import React, {useContext} from 'react'
import { Button, StyleSheet, Text, View} from 'react-native'
import { AuthContext } from './contexts/AuthProvider'

export default function Login() {
    const {handleLogin} = useContext(AuthContext);
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Wellcome</Text>
        <Button title='Login' onPress={()=>handleLogin()}></Button>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 25, 
        fontWeight: 'bold',
        backgroundColor: 'black', 
        color: 'white',
        marginBottom: 40,
        padding: 15,
    },


})