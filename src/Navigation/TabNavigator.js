import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// import local files
import StackNavigator from './StackNavigator';
import AddGamesScreen from '../Screens/AddGameScreen';
import GamingNewsScreen from '../Screens/GamingNewsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
        // STYLE
            screenOptions = {({route}) => ({
                tabBarIcon: ({color,size}) => {
                    let iconName;
                    if (route.name === 'GameListTab') {
                        iconName = 'list-outline';
                    } else if (route.name === 'AddGameTab') {
                        iconName = 'add-circle-outline';
                    } else if (route.name === 'GamingNewsTab') {
                        iconName = 'newspaper-outline';
                    }
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#c652b6',
                tabBarInactiveTintColor: 'gray',
            })}
        
        >
            {/* TAB SCREENS */}
            <Tab.Screen
                name = "GameListTab"
                component = {StackNavigator}
                options = {{tabBarLabel: 'Catálogo', headerShown: false}}
            ></Tab.Screen>
            <Tab.Screen
                name = "AddGameTab"
                component = {AddGamesScreen}
                options = {{tabBarLabel: 'Agregar', title : 'Agregar Juego'}}
            ></Tab.Screen>
            <Tab.Screen
                name = "GamingNewsTab"
                component = {GamingNewsScreen}
                options = {{tabBarLabel: 'Noticias', title : 'Noticias de Videojuegos'}}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabNavigator;
