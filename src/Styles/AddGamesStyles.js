import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  keyboardAvoidingView:{
    flex: 1,
  },
  scrollContainer:{
    flexGrow: 1,
    paddingHorizontal: 34,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    paddingHorizontal: 15,
    backgroundColor: '#d6d5d5',
    marginVertical: 10,
    borderRadius: 12,
    height: 45,
  },
  addButton: {
    width: '90%',
    alignSelf: 'center',
    padding: 12,
    marginTop: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  addButtonActive:{
    backgroundColor: '#4CAF50',

  },
  addButtonInactive:{
    backgroundColor: '#9e9e9e',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  clearButton: {
    width: '90%',
    alignSelf: 'center',
    padding: 12,
    marginTop: 10,
    marginBottom: 30,
    borderRadius: 15,
    alignItems: 'center',
    backgroundColor: '#f48836',
  },
  clearButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }

});

export default styles;