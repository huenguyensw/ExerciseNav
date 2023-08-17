import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function MovieItemDetail({ route, navigation }) {
    const { itemId, otherParam } = route.params;
    const [movie, setMovie] = useState('');
    const URL = 'https://www.omdbapi.com/?apikey=460655c6&i=' + itemId;

    useEffect(() => {
        const screenNavigation = navigation.getParent();
        
        // Hide the header when the component mounts
        screenNavigation.setOptions({
            headerShown: false,
        });
        // Reset the header when the component unmounts
        return () => {
            screenNavigation.setOptions({
                headerShown: true,
            });
        };
    }, []);

    useEffect(() => {
        fetch(URL)
            .then((response) => {
                if (response == false) {
                    throw new Error('HTTP Error: ' + response.status)
                }
                return response.json();
            })
            .then((data) => {
                setMovie(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [URL])
    console.log(URL)
    console.log(movie.Ratings)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{movie.Title}</Text>
            <Text>
                <Text style={styles.bold}>Year: </Text>
                <Text>{movie.Year}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>Rated: </Text>
                <Text>{movie.Rated}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>Released: </Text>
                <Text>{movie.Released}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>Runtime: </Text>
                <Text>{movie.Runtime}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>Genre: </Text>
                <Text>{movie.Genre}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>Director: </Text>
                <Text>{movie.Director}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>Writer: </Text>
                <Text>{movie.Writer}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>Actors: </Text>
                <Text>{movie.Actors}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>Plot: </Text>
                <Text>{movie.Plot}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>Language: </Text>
                <Text>{movie.Language}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>Country: </Text>
                <Text>{movie.Country}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>Awards: </Text>
                <Text>{movie.Awards}</Text>
            </Text>
            <View style={styles.rating}>
                {movie.Ratings != undefined && movie.Ratings.map((item, key) =>
                    <View key={key}>
                        <Text style={styles.bold}>{item.Source}: </Text>
                        <Text>{item.Value}</Text>
                    </View>
                )}

            </View>
            <Text>
                <Text style={styles.bold}>Type: </Text>
                <Text>{movie.Type}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>DVD: </Text>
                <Text>{movie.DVD}</Text>
            </Text>
            <Text>
                <Text style={styles.bold}>BoxOffice: </Text>
                <Text>{movie.BoxOffice}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
    },
    bold: {
        fontWeight: 'bold',
    },
    rating: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
    }
})
