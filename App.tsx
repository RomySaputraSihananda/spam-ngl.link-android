/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Search from './components/Seacrh';
import styles from './styles/styles';

class App extends React.Component {
  render = () => {
    return (
      <View style={styles.body}>
        <Search />
      </View>
    );
  };
}

export default App;
