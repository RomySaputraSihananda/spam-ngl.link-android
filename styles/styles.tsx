import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    backgroundColor: '#333',
    height: '100%',
    width: '100%',
    fontFamily: 'Quote',
    justifyContent: 'center',
    padding: 10,
  },
  button: {
    backgroundColor: '#eaeaea',
    alignSelf: 'center',
    borderRadius: 3,
  },
  textButton: {
    color: '#333',
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 16,
    fontFamily: 'Quote',
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#eaeaea',
    color: '#333',
    padding: 0,
    flex: 1,
    marginRight: 10,
    borderRadius: 3,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  plainText: {
    color: '#eaeaea',
    fontSize: 24,
    padding: 10,
  },
});

export default styles;
