// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import {View} from 'react-native';
// import Search from './views/Seacrh';
// import styles from './styles/styles';
// import Logger from './views/Logger';

// // import {NavigationContainer} from '@react-navigation/native';
// // import {createNativeStackNavigator} from '@react-navigation/native-stack';

// // const Stack = createNativeStackNavigator();

// // function App() {
// //   return (
// // <NavigationContainer>
// //   <Stack.Navigator>
// //     <Stack.Screen name="Home" component={HomeScreen} />
// //   </Stack.Navigator>
// // </NavigationContainer>
// //   );
// // }

// // export default App;
// class App extends React.Component {
//   render = () => {
//     return (
//       <View style={styles.body}>
//         {/* <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="Home" component={Search} />
//             <Stack.Screen name="logger" component={Logger} />
//           </Stack.Navigator>
//         </NavigationContainer> */}
//         {/* <Search /> */}
//         <Logger />
//       </View>
//     );
//   };
// }

// export default App;

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
