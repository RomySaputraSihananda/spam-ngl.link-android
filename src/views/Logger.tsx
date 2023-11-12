import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
// > send random message to @${username} status => ${status}
interface Log {
  id: number;
  log: string;
  status: boolean;
}

interface LogState {
  logs: Log[];
}

class Logger extends Component<{}, LogState> {
  flatListRef: React.RefObject<FlatList<Log>>;

  constructor(props: {}) {
    super(props);
    this.state = {
      logs: [
        {
          id: 99,
          log: ` send random message to @${'username'}`,
          status: true,
        },
        {
          id: 98,
          log: ` send random message to @${'username'}`,
          status: false,
        },
      ],
    };
    this.flatListRef = React.createRef();
  }

  // componentDidMount(): void {
  //   let i: number = 1;
  //   setInterval(() => {
  //     this.setState(
  //       prevState => ({
  //         logs: [
  //           ...prevState.logs,
  //           {id: i, log: `$ [success] send random message to @${'username'}`},
  //         ],
  //       }),
  //       () => {
  //         console.log(this.state.logs);
  //         this.scrollToEnd();
  //       },
  //     );
  //     i++;
  //   }, 1000);
  // }

  scrollToEnd = () => {
    if (this.flatListRef.current) {
      this.flatListRef.current.scrollToEnd({animated: true});
    }
  };

  render() {
    const {logs} = this.state;

    return (
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
                  style={item.status ? styles.successText : styles.failedText}>
                  {item.status ? ' [succes] ' : ' [failed] '}
                </Text>
                {item.log}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
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

export default Logger;
