// components/RecipeList.js

// Import necessary components and libraries
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Rating from './Rating';

export default function RecipeList({ recipes, onSelect }) {
  // Function to render each recipe item in the list
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.recipeItem} onPress={() => onSelect(item)}>
      <Text style={styles.recipeName}>{item.strMeal}</Text> {/* Display the recipe name */}
      <Rating recipeId={item.idMeal} /> {/* Display the rating component for the recipe */}
    </TouchableOpacity>
  );

  return (
    <FlatList // Return fetched data in a List
      data={recipes} // The list of recipes to display
      renderItem={renderItem} // Function to render each item
      keyExtractor={(item) => item.idMeal} // Unique key for each item
    />
  );
}
// Define styles for the RecipeList data
const styles = StyleSheet.create({
  recipeItem: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  recipeName: { fontSize: 18, fontWeight: 'bold' }
});