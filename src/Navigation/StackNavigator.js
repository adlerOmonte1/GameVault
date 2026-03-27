import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import local files
import GameListScreen from '../Screens/GameListScreen';
import GameDetailScreen from '../Screens/GameDetailScreen';

const Stack = createStackNavigator();

const StackNavigator = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "GameList"
                component = {GameListScreen}
                options = {{title: 'Catálogo de Juegos'}}
            ></Stack.Screen>

            <Stack.Screen
                name = "GameDetail"
                component = {GameDetailScreen}
                options = {{title: 'Detalles del Juego'}}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}
export default StackNavigator;