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

import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { display } from 'styled-system';


import { AuthContext } from './components/context';

import AsyncStorage  from '@react-native-async-storage/async-storage';
import axios from 'axios';

import RootStack from './components/RootStack';
import RootDrawerStack from './drawer/RootDrawerStack';

import ComponentStack from './drawer/ComponentStack';

import NetworkComponent from './components/NetworkLibraryComponent';

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

  componentWillMount = () => {
    axios.defaults.baseURL = 'http://192.168.1.12:8000/api';
    axios.defaults.timeout = 1500;
  }

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (token, userName) => {
      // setUserToken('fkjg');
      // setIsLoading(false);
      // FETCH THRU API CALL
      
      const userToken = String(token);//String(foundUser[0].userToken); 
    
      //const userName = userName;//foundUser[0].email;

      // if ( userName == 'user' && password == 'password') {
        try {
          await AsyncStorage.setItem('userToken', userToken);
          await AsyncStorage.setItem('user', userName);
        }
        catch(e) {
          console.log(e);
        }
      //}
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken')
        await AsyncStorage.removeItem('user')

      }
      catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });

    },

  }), []);
  
  
  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000)
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
    { loginState.userToken !== null ? ( 
       <RootDrawerStack>  </RootDrawerStack>  

    )
    :
    <RootStack> </RootStack>
    }

    
    </AuthContext.Provider>
  );
}

export default App;

