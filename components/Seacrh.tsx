import React from 'react';
import {Button, Pressable, Text, TextInput, View} from 'react-native';
import styles from '../styles/styles';

interface State {
  username: string;
  status: number;
}

interface Props {}

class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      status: 0,
    };
  }

  setUsername = (username: string) => {
    this.setState({username});
  };

  handleSearch = () => {
    (async () => {
      const {status} = await fetch(`https://ngl.link/${this.state.username}`);
      this.setState({status});
    })();
  };

  render(): React.ReactNode {
    return (
      <View>
        <Text>{this.state.status}</Text>
        <View style={styles.search}>
          <TextInput
            onChange={e => this.setUsername(e.nativeEvent.text)}
            style={styles.input}
          />
          <Pressable onPress={this.handleSearch} style={styles.button}>
            <Text style={styles.textButton}>Search</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

export default Search;
