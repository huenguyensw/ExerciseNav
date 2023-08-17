import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import MovieItem from './MovieItem';
import { useNavigation } from '@react-navigation/native';

export default function MovieList() {
    const navigator = useNavigation();
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const URL = searchValue === ''
    ? 'https://www.omdbapi.com/?apikey=460655c6&s='+ 'superman'
    : 'https://www.omdbapi.com/?apikey=460655c6&s='+ searchValue;

    useEffect(()=>{
        fetch(URL)
        .then((response)=>{
            if(response == false){
                throw new Error('HTTP Error: '+ response.status)
            }
            return response.json();
        })  
        .then((data)=>{
            setData(data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[URL])
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Enter text search...' value={searchValue} onChangeText={(text)=>setSearchValue(text)}/>
        {data.Response
        ? data.Search != undefined && data.Search.map((item)=><MovieItem key={item.imdbID} item={item} navigation={navigator}/>) 
        : <Text>Loading...</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        rowGap: 20,
        marginLeft: 10,
    },
    input: {
        borderWidth: 1.5,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        padding: 7,
        borderRadius: 5,
        borderColor: 'gray',
    }
})
