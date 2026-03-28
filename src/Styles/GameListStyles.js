import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    paddingHorizontal: 10,
    paddingVertical:0 // change -30
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#555555',
    fontWeight: 'bold'
  },
  listContainer: {
    padding: 5,
  },
  
  card: {
    backgroundColor: '#ffff', 
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
    
  },
  emojiContainer: {
    fontSize: 50,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00000',
    marginBottom: 5
  },
  details: {
    fontSize: 14,
    color: '#555555',
  }
});

export default styles;