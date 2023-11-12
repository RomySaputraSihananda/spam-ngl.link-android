import React from 'react';
import {Button, Image, Pressable, Text, TextInput, View} from 'react-native';
import styles from '../styles/styles';
import * as cheerio from 'cheerio';

interface State {
  username: string;
  data: {
    username: string;
    avatar: string;
  } | null;
  notFound: boolean;
}

interface Props {}

class Search extends React.Component<Props, State> {
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
    return (
      <View style={{flex: 1}}>
        <View style={styles.profile}>
          {this.state.notFound && (
            <View style={{alignItems: 'center'}}>
              <Text style={styles.plainText}>name not found</Text>
            </View>
          )}
          {/* {this.state.data && ( */}
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.avatar}
              // source={{uri: this.state.data.avatar}}
              source={{
                uri: 'https://firebasestorage.googleapis.com/v0/b/ask-fun-d10f0.appspot.com/o/images%2F3hbs59j5pEZCmENcMw4Fe3GDKuf2.jpg?alt=media&token=a5f0e868-cb30-48d9-b2a5-1739bf7559d0',
              }}
            />
            <Text style={styles.plainText}>{'jksdh'}</Text>
          </View>
          {/* )} */}
        </View>
        <View style={styles.search}>
          <TextInput
            onChange={e => this.setUsername(e.nativeEvent.text)}
            style={styles.input}
            placeholder="username instagram"
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
