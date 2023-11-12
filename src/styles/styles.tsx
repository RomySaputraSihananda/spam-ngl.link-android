import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#333',
    fontFamily: 'Quote',
    padding: 10,
  },
  button: {
    backgroundColor: '#eaeaea',
    alignSelf: 'center',
    borderRadius: 3,
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    paddingVertical: 8,
    paddingHorizontal: 8,
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
    height: '100%',
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
  profile: {
    flex: 1,
  },
});

export default styles;
