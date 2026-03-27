import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';

// import local files
import styles from '../Styles/GameDetailStyles';

const GameDetailScreen = ({navigation,route}) => {

    const {gameDetails} = route.params;

    const [isFavorite,setFavorite] = useState(false);
    
    useEffect(() => {
        setFavorite(false);
    },[gameDetails]);
    
    const handleFavoritePress = () => {
        setFavorite(!isFavorite);
        Alert.alert(isFavorite ? 'Removido de favoritos' : 'Añadido a favoritos');
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style = {styles.safeArea}>
            <ScrollView contentContainerStyle = {styles.scrollContainer}>
                {/* CARD VISUALIZATION */}
                <View style = {styles.card}>
                    {/* TITTLE AND EMOJI */}
                    <Text style = {styles.emoji}>{gameDetails.emoji}</Text>
                    <Text style = {styles.title}>{gameDetails.title}</Text>

                    {/* DETAILS */}
                    <View style = {styles.detailsBadge}>
                        <View style = {styles.detailsContainer}>
                            <Text style={styles.details}>{gameDetails.platform}</Text>
                        </View>
                        <View style = {styles.detailsContainer}>
                            <Text style={styles.details}>{gameDetails.genre}</Text>
                        </View>
                        <View style = {styles.detailsContainer}>
                            <Text style={styles.details}>Edad: {gameDetails.ageRating}</Text>
                        </View>
                    </View>

                    {/* PRICE */}
                    <View style = {styles.priceBadge}>
                        <View style = {styles.priceContainer}>
                            <Text style={styles.priceText}>Precio: ${gameDetails.price}</Text>
                        </View>
                    </View>

                    {/* DESCRIPTION */}
                    <View style = {styles.descriptionContainer}>
                        <Text style = {styles.descriptionTitle}>Descripción</Text>
                        <Text style = {styles.descriptionText}>{gameDetails.description}</Text>
                    </View>
                </View>
                {/* BUTTONS */}
                <View style = {styles.buttonContainer}>
                    {/* FAVORITE BUTTON */}
                    <TouchableOpacity 
                    style = {[
                        styles.favoriteButton,
                        isFavorite ? styles.favoriteButtonActive : styles.favoriteButtonInactive
                    ]} 
                    onPress={handleFavoritePress}>

                        <Text
                            style = {[
                                styles.favoriteButtonText,
                                isFavorite ? styles.favoriteButtonTextActive : styles.favoriteButtonTextInactive
                            ]}
                        >
                            {isFavorite ? 'En lista de deseos' : 'Agregar a lista de deseos'}
                        </Text>
                    </TouchableOpacity>

                    {/* BACK BUTTON */}
                    <TouchableOpacity 
                        style = {styles.backButton}
                        onPress={handleGoBack}
                    >
                        <Text style = {styles.backButtonText}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default GameDetailScreen;