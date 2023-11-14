import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from '../styles/styles';

interface Props {
  navigation: NavigationProp<any>;
}

class HomeScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <View style={styles.body}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Search')}
        />
      </View>
    );
  }
}

export default HomeScreen;
