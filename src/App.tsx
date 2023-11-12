/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import Search from './views/Seacrh';
import styles from './styles/styles';
import Logger from './views/Logger';

class App extends React.Component {
  render = () => {
    return (
      <View style={styles.body}>
        {/* <Search /> */}
        <Logger />
      </View>
    );
  };
}

export default App;
