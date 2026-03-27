import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    color: 'black',
  },
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: '#eeeeee', 
    borderWidth: 1,    
    borderColor: '#cccccc',   
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row', 
    alignItems: 'center',
  },
  emojiContainer: {
    fontSize: 30,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  details: {
    fontSize: 14,
    color: 'gray',
  }
});

export default styles;