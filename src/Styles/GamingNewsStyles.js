// src/styles/GamingNewsStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: "#d1d1d1"
  },
  card: {
    padding: 20,
    marginHorizontal:30,
    marginBottom:10,
    marginVertical:150,
    backgroundColor:"#ffff",
    borderRadius: 25,

  },
  indicatorText: {
    textAlign:'center',
    fontSize: 14,
    color: "#555555",
    marginTop:5,
    marginBottom:10,
    fontWeight:'800'
  },
  newsTitle: {
    fontSize:18,
    fontWeight:'bold',
    marginBottom:10,
    textAlign: 'center'
  },
  newsSummary: {
    fontSize:15,
    color: 'black',
    lineHeight:22,
    textAlign:'center'
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    marginHorizontal: 60,
    marginTop:10,
    padding:15,
    borderRadius: 20,
    alignItems:'center'

  },
  nextButtonText: {
    color: '#ffff',
    fontWeight:'bold',
    fontSize: 16,
  }
});

export default styles;