import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#d1d1d1',
  },
  scrollContainer: {
    padding: 25,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 25,
    marginBottom: 20,
  },
  emoji: {
    fontSize: 80,
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsBadge: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 15,
  },
  detailsContainer: {
    backgroundColor: '#c5e8ff90',
    padding: 10,
    borderRadius: 12,
    margin: 5,
  },
  details: {
    fontSize: 14,
    color: '#000000',
  },
  priceBadge: {
    alignItems: 'center',
    marginBottom: 18,
  },
  priceContainer: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  priceText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginTop: 8,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'column',
  },
  favoriteButton: {
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  favoriteButtonActive: {
    backgroundColor: '#e6873ac1',
  },
  favoriteButtonInactive: {
    backgroundColor: '#4CAF50',
  },
  favoriteButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoriteButtonTextActive: {
    color: 'white',
  },
  favoriteButtonTextInactive: {
    color: '#ffffff',
  },
  backButton: {
    backgroundColor: '#494949b4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;