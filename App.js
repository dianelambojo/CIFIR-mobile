// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>pink para masaya ang buhay</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'purple',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { NativeBaseProvider, Box } from 'native-base';

import Login from './components/Login';

export default function App() {
  return (
    <NativeBaseProvider>
      <Login> </Login>
    </NativeBaseProvider>
  );
}

