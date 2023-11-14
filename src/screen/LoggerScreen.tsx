import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Spammer from '../utils/index';
import {RouteProp} from '@react-navigation/native';
interface Log {
  id: number;
  status: boolean;
}

interface State {
  username: string;
  logs: Log[];
}

interface Data {
  username: string;
  avatar: string;
}

interface Props {
  route: RouteProp<{Logger: {data: Data}}, 'Logger'>;
}

class LoggerScreen extends Component<Props, State> {
  flatListRef: React.RefObject<FlatList<Log>>;

  constructor(props: Props) {
    super(props);
    this.state = {
      logs: [],
      username: props.route.params.data.username,
    };
    this.flatListRef = React.createRef();
  }

  componentDidMount(): void {
    let i: number = 1;
    const loop = setInterval(async () => {
      const {logs, username}: State = this.state;

      const status: boolean = await Spammer(username);

      this.setState(
        prevState => ({logs: [...logs, {id: logs.length + 1, status}]}),
        () => {
          console.log(this.state.logs);
          this.scrollToEnd();
        },
      );

      if (i === 10) clearInterval(loop);

      i++;
    }, 1000);
  }

  scrollToEnd = () => {
    if (this.flatListRef.current) {
      this.flatListRef.current.scrollToEnd({animated: true});
    }
  };

  render() {
    const {logs, username} = this.state;

    return (
      <View style={{flex: 1, backgroundColor: '#1F2A3E', padding: 10}}>
        <View style={styles.container}>
          <Text style={{color: '#0CF167'}}>follow my github</Text>
          <FlatList
            data={logs}
            ref={this.flatListRef}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View>
                <Text style={styles.logText}>
                  ${' '}
                  <Text
                    style={
                      item.status ? styles.successText : styles.failedText
                    }>
                    {item.status ? ' [succes] ' : ' [failed] '}
                  </Text>
                  {` send random message to @${username}`}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logText: {
    color: '#0CF167',
    fontSize: 13,
    padding: 2,
  },
  successText: {
    backgroundColor: '#0CF167',
    color: '#000',
  },
  failedText: {
    backgroundColor: 'pink',
    color: '#000',
  },
});

export default LoggerScreen;
