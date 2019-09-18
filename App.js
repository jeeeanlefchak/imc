/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';


const App = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} />
      <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} />
      {/* <TouchableOpacity onPress={() => { }} > <Text> Calcular </Text></TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF'
  },
  input: {
    height: 80,
    textAlign: 'center',
    width: '50%',
    fontSize: 50,
    marginTop: 24
  }
});

export default App;

// https://www.youtube.com/watch?v=RdcguVta_bs