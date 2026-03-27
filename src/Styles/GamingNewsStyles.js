// src/styles/GamingNewsStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
  },
  card: {
    borderWidth: 1,
    borderColor: 'black', 
    margin: 10,
    padding: 10,
  },
  indicatorText: {
    color: 'black',
  },
  newsTitle: {
    color: 'black',
    fontWeight: 'bold', 
  },
  newsSummary: {
    color: 'black',
  },
  nextButton: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10,
  },
  nextButtonText: {
    color: 'black',
  }
});

export default styles;