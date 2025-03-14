// components/RecipeDetail.js

// Import necessary components and libraries
import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';

export default function RecipeDetail({ recipe, onClose }) {
  return (
    <ScrollView contentContainerStyle={styles.container}> {/* Return RecipeDetail inside one ScrollView div */}
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} /> {/* Display the recipe image */}
      <Text style={styles.title}>{recipe.strMeal}</Text> {/* Display the recipe title */}
      <Text style={styles.instructions}>{recipe.strInstructions}</Text> {/* Display the recipe instructions */}
      <Button title="Close" onPress={onClose} /> {/* Button to close the recipe details */}
    </ScrollView>
  );
}

// Define styles for the RecipeDetail data
const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  image: { width: '50%', height: 200, alignSelf: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  instructions: { fontSize: 16, textAlign: 'center', marginVertical: 10 }
});
