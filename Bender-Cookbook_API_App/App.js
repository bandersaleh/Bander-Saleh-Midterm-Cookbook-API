// App.js
import React from 'react';
import { StyleSheet } from 'react-native';
import MainAppContainer from './components/MainAppContainer'; // Import MainAppContainer Component

// Run initial App's function
export default function App() {
  return <MainAppContainer />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
