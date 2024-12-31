import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 66,
    right: 16,
    backgroundColor: '#007BFF',
    width: 46,
    height: 46,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  analyt: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  analytName: {
    fontSize: 18,
  },
});
