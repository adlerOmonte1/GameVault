import React, {useState,useEffect} from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";

import GAMING_NEWS from '../Data/gamingNewsData'; 
import styles from '../Styles/GamingNewsStyles';

const GamingNewsScreens = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [news] = useState(GAMING_NEWS);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex+1)% news.length);
        },5000);
        return () => clearInterval(intervalId);
    }, []);

    const handleNextNews = () => {
        setCurrentIndex((prevIndex) => (prevIndex +1)% news.length);
    };

    const currentNewsItem = news[currentIndex];
    return (
        <SafeAreaView style = {styles.safeArea}>
            <View style = {styles.card}>
                <Text style = {styles.indicatorText}>Noticia {currentIndex + 1} de {news.length}</Text>
                <Text style = {styles.newsTitle}>{currentNewsItem.title}</Text>
                <Text style = {styles.newsSummary}>{currentNewsItem.summary}</Text>
            </View>
            <TouchableOpacity
                style = {styles.nextButton}
                onPress={handleNextNews}
            >
                <Text style={styles.nextButtonText}>Siguiente noticia</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default GamingNewsScreens
