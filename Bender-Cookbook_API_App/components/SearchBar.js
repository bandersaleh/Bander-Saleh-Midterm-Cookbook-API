// components/SearchBar.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ ingredients, setIngredients }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Enter ingredients (comma-separated is *Premium API Only*)"
      value={ingredients}
      onChangeText={setIngredients}
    />
  );
}

const styles = StyleSheet.create({
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }
});
