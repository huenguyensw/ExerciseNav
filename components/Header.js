import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


export default function Header({name, navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            title="Info"
            style={styles.icon}
          >
        <Ionicons name="menu-sharp" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    }
})
