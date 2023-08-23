import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'


export default function MovieItem({ item, navigation }) {

    return (
        <TouchableOpacity
            onPress={() => {
                // const screenNavigation = navigation.getParent();
                // screenNavigation.setOptions({
                //     headerShown: false,
                // });
                navigation.navigate("Movie Details", {
                    itemId: item.imdbID,
                    otherParam: 'anything you want here',
                    navigation: navigation
                });
            }}
        >
            <View style={styles.container}>
                <Image source={{ uri: item.Poster }} style={styles.image} />
                <View>
                    <Text>{item.Title}</Text>
                    <Text>{item.Type}</Text>
                    <Text>{item.Year}</Text>
                    <Text>{item.imdbID}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        columnGap: 20,
    },
    image: {
        width: 90,
        height: 90,
        resizeMode: 'cover',
    }

})
