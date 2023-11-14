import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Spammer from '../utils/index';
import {RouteProp} from '@react-navigation/native';
interface Log {
  id: number;
  status: boolean;
}

interface LogState {
  logs: Log[];
}

interface Data {
  data: {
    username: string;
    avatar: string;
  };
}

interface Props {
  route: RouteProp<{Logger: {data: Data}}, 'Logger'>;
}

class LoggerScreen extends Component<Props, LogState> {
  flatListRef: React.RefObject<FlatList<Log>>;

  constructor(props: Props) {
    super(props);
    this.state = {
      logs: [
        {
          id: 99,
          status: true,
        },
        {
          id: 98,
          status: false,
        },
      ],
    };
    this.flatListRef = React.createRef();
  }

  componentDidMount(): void {
    const {logs}: LogState = this.state;
    let i: number = 1;
    // console.log(this.props.username);
    // setInterval(async () => {
    //   // const data: {} = await spam(props.username);S
    //   this.setState(
    //     prevState => ({logs: [...logs, {id: logs.length + 1, status: true}]}),
    //     () => {
    //       console.log(this.state.logs);
    //       this.scrollToEnd();
    //     },
    //   );
    //   i++;
    // }, 1000);
  }

  scrollToEnd = () => {
    if (this.flatListRef.current) {
      this.flatListRef.current.scrollToEnd({animated: true});
    }
  };

  render() {
    const {logs} = this.state;

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
                  {`send random message to @${'username'}`}
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
