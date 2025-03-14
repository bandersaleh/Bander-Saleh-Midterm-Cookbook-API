// components/SearchBar.js

// Import necessary components and libraries
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

// The SearchBar Component is a Javascript Function to update the UI
// Props: (can only send data down the component tree (not up))
// - ingredients: The current search query (string)
// - setIngredients: Function to update the search query
export default function SearchBar({ ingredients, setIngredients }) {
  return (
    <TextInput
      style={styles.input} // Apply styles to the input field
      placeholder="Enter ingredients (comma-separated is *Premium API Only*)" // Displayed text when the input is empty
      value={ingredients} // Bind input value to the state variable
      onChangeText={setIngredients} // Update the state when the user types
    />
  );
}

// Define styles for the search input field
const styles = StyleSheet.create({
  input: { 
    borderWidth: 1, // Add a border around the input field
    padding: 10, // Add padding inside the input field
    marginBottom: 10, // Add spacing below the input field
    borderRadius: 5 // Round the corners of the input field
  }
});
