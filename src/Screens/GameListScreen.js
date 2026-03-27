import React, {useState, useEffect} from 'react';
import {View,Text,FlatList,ActivityIndicator,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import GAMES_CATALOG from '../Data/gamesData'
import styles from '../Styles/GameListStyles'


const GameListScreen = ({navigation}) => {
    const [games, setGames] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); // 

    useEffect(()=>{
        const timerId = setTimeout(() =>{
            setGames(GAMES_CATALOG);
            setIsLoading(false)
        },1500)
    
        return () => clearTimeout(timerId);
    }, [])


    const renderGameCard = ({ item }) => {
        return (
            <TouchableOpacity
                style = {styles.card}
                onPress={() => navigation.navigate('GameDetail', {gameDetails:item})}
            >
                <Text style= {styles.emojiContainer}>{item.emoji}</Text>

                <View style = {styles.infoContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style= {styles.details}>
                        {item.platform} * {item.genre}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.safeArea}>
            {isLoading ? (
                <View style= {styles.loadContainer}>
                    <ActivityIndicator size = "large" color='#ed4b4b'/>
                    <Text style={styles.loadingText}>Cargando catalogo ...</Text>
                </View>
            ) : (
                <FlatList 
                    data = {games}
                    keyExtractor={(item) => item.id}
                    renderItem={renderGameCard}
                    contentContainerStyle = {styles.listContainer}
                />
            )}
        </SafeAreaView>  
    )
}
export default GameListScreen