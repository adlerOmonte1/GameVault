import React, { useState, useEffect } from 'react';
import { View, Text,TextInput, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';

// import local files
import styles from '../Styles/AddGamesStyles';

const AddGamesScreen = () => {

    // State variables for form inputs
    const [title, setTitle] = useState('');
    const [platform, setPlatform] = useState('');
    const [genre, setGenre] = useState('');
    const [ageRating, setAgeRating] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [emoji, setEmoji] = useState('');

    // state for form validation
    const [isFormValid, setIsFormValid] = useState(false);

    // useEffect to validate form inputs
    useEffect(() => { 

        // text validation
        const areTextsValid = 
            title.trim() !== '' && 
            platform.trim() !== '' && 
            genre.trim() !== '' && 
            ageRating.trim() !== '' && 
            description.trim() !== '' && 
            emoji.trim() !== '' &&
            price.trim() !== '';

        //price validation
        const isPriceValid = !isNaN(price) && Number(price) > 0; 

        if (areTextsValid && isPriceValid) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }

    }, [title, platform, genre, ageRating, price, description, emoji]);
    
    // clear form function
    const handleClearForm = () => {
        setTitle('');
        setPlatform('');
        setGenre('');
        setAgeRating('');
        setPrice('');
        setDescription('');
        setEmoji('');
    };

    //add game function
    const handleAddGame = () => {
        if (isFormValid) {
            Alert.alert('Juego añadido', `Resumen:\nTítulo: ${title}\nPlataforma: ${platform}\nGénero: ${genre}\nPrecio: $${price}\nClasificación: ${ageRating}\nDescripción: ${description}\nEmoji: ${emoji}`);
            handleClearForm();
        } else {
            Alert.alert('Error', 'Por favor, completa todos los campos correctamente antes de añadir el juego.');
        }    
    }

    return(
        <SafeAreaView style = {styles.safeArea}>
            <KeyboardAvoidingView
                style = {styles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                  style={{ flex: 1 }}
                  contentContainerStyle = {styles.scrollContainer}>
                
                    {/* TITLE */}
                    <View>
                        <Text style = {styles.label}>Título</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = "Ej. The Legend of Zelda"
                            placeholderTextColor="#7e7e7e"
                            value = {title}
                            onChangeText = {setTitle}
                        />
                    </View>
                    {/* PLATFORM */}
                    <View style = {styles.inputGroup}>
                        <Text style = {styles.label}>Plataforma</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = "Ej. Nintendo Switch"
                            placeholderTextColor="#7e7e7e"
                            value = {platform}
                            onChangeText = {setPlatform}
                        />
                    </View>
                    {/* GENRE */}
                    <View>
                        <Text style = {styles.label}>Género</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = "Ej. Acción"
                            placeholderTextColor="#7e7e7e"
                            value = {genre}
                            onChangeText = {setGenre}
                        />
                    </View>
                    {/* AGE RATING */}
                    <View>
                        <Text style = {styles.label}>Clasificación</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = "Ej. T"
                            placeholderTextColor="#7e7e7e"
                            value = {ageRating}
                            onChangeText = {setAgeRating}
                        />
                    </View>
                    {/* PRICE */}
                    <View style = {styles.inputGroup}>
                        <Text style = {styles.label}>Precio</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = "Ej. 59.99"
                            placeholderTextColor="#7e7e7e"
                            value = {price}
                            onChangeText = {setPrice}
                            keyboardType="numeric"
                        />
                    </View>
                    {/* DESCRIPTION */}
                    <View style = {styles.inputGroup}>
                        <Text style = {styles.label}>Descripción</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = "Ej. Un juego de acción épico"
                            placeholderTextColor="#7e7e7e"
                            value = {description}
                            onChangeText = {setDescription}
                        />
                    </View>
                    {/* EMOJI */}
                    <View>
                        <Text style = {styles.label}>Emoji</Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = "Ej. 🗡"
                            placeholderTextColor="#7e7e7e"
                            value = {emoji}
                            onChangeText = {setEmoji}
                        />
                    </View>
                    {/* BUTTONS */}
                    <View>
                        {/* ADD GAME BUTTON */}
                        <TouchableOpacity
                            style = {[
                                styles.addButton,
                                isFormValid ? styles.addButtonActive : styles.addButtonInactive
                            ]}
                            onPress={handleAddGame}
                            disabled={!isFormValid}
                        >
                            <Text style = {styles.addButtonText}>Añadir Juego</Text>
                        </TouchableOpacity>
                    </View>

                    {/* CLEAR FORM BUTTON */}
                    <View>
                        <TouchableOpacity
                            style = {styles.clearButton}
                            onPress = {handleClearForm}
                        >
                            <Text style = {styles.clearButtonText}>Limpiar Formulario</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AddGamesScreen;

