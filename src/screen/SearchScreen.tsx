import React from 'react';
import {Alert, Image, Pressable, Text, TextInput, View} from 'react-native';
import styles from '../styles/styles';
import * as cheerio from 'cheerio';
import {NavigationProp} from '@react-navigation/native';

interface State {
  username: string;
  data: {
    username: string;
    avatar: string;
  } | null;
  notFound: boolean;
}

interface Props {
  navigation: NavigationProp<any>;
}

class SearchScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      data: null,
      notFound: false,
    };
  }

  setUsername = (username: string) => {
    this.setState({username});
  };

  handleSearch = () => {
    (async () => {
      const req = await fetch(`https://ngl.link/${this.state.username}`);

      if (!(req.status === 404)) {
        const html: string = await req.text();

        const $ = cheerio.load(html);

        const {username, avatar} = {
          username: /var ig_username = "(.*?)"/.exec($('script').text()) || [],
          avatar: /var ig_pfp_url = "(.*?)"/.exec($('script').text()) || [],
        };

        return this.setState({
          data: {
            username: username[1],
            avatar: avatar[1],
          },
          notFound: false,
        });
      }

      return this.setState({data: null, notFound: true});
    })();
  };

  render(): React.ReactNode {
    const {navigation} = this.props;
    return (
      <View style={styles.body}>
        <View style={{flex: 1}}>
          <View style={{flex: 1}}>
            {this.state.notFound && (
              <View style={{alignItems: 'center'}}>
                <Text style={styles.plainText}>name not found</Text>
              </View>
            )}
            {this.state.data && (
              <View style={styles.profile}>
                <Image
                  style={styles.avatar}
                  source={{uri: this.state.data.avatar}}
                />
                <Text style={styles.plainText}>{this.state.data.username}</Text>
                <View style={styles.choice}>
                  <View>
                    <Pressable
                      onPress={() =>
                        navigation.navigate('Logger', {
                          data: this.state.data,
                        })
                      }
                      style={styles.buttonAttack}>
                      <Text style={styles.textButtonAttack}>Attack !</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            )}
          </View>
          <View style={styles.search}>
            <TextInput
              onChange={e => this.setUsername(e.nativeEvent.text)}
              style={styles.input}
              placeholder="username instagram"
            />
            <Pressable onPress={this.handleSearch} style={styles.buttonSearch}>
              <Text style={styles.textButton}>Search</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }
}

export default SearchScreen;
