import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppConfig from './appConfig';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is an app config test app.</Text>
        <Text>You are running in {AppConfig.environment}.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
