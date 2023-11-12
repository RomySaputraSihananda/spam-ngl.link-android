import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    // backgroundColor: '#333',
    backgroundColor: '#1F2A3E',
    padding: 10,
  },
  buttonSearch: {
    justifyContent: 'center',
    borderRadius: 5,
    height: '100%',
  },
  buttonAttack: {
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'pink',
  },
  textButton: {
    color: '#333',
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 18,
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
    fontSize: 18,
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
    backgroundColor: '#f60',
    alignItems: 'center',
  },
  choice: {
    height: 34,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
});

export default styles;
