import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#333',
    padding: 10,
  },
  button: {
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    borderRadius: 5,
    height: '100%',
  },
  textButton: {
    color: '#333',
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 16,
    fontFamily: 'Quote',
  },
  search: {
    flexDirection: 'row',
    height: 34,
    marginVertical: 8,
    marginHorizontal: 8,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
  },
  input: {
    backgroundColor: '#eaeaea',
    color: '#333',
    padding: 0,
    flex: 1,
    marginRight: 10,
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 10,
    height: '100%',
    fontFamily: 'Quote',
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
    fontFamily: 'Quote',
  },
  profile: {
    flex: 1,
  },
});

export default styles;
