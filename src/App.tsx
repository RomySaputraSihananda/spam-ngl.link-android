/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import styles from './styles/styles';
import {HomeScreen, LoggerScreen, SearchScreen} from './screen';

import {NavigationContainer} from '@react-navigation/native';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

const options: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#1F2A3E',
  },
  headerTintColor: '#eaeaea',
  headerTitleStyle: {
    fontFamily: 'Quote',
    letterSpacing: 2,
  },
};
class App extends React.Component {
  render = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={options} />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={options}
          />
          <Stack.Screen
            name="Logger"
            component={LoggerScreen}
            options={options}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
}

export default App;
