// components/RecipeDetail.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function RecipeDetail({ recipe, onClose }) {
  return (
    <View style={styles.details}>
      <Text style={styles.recipeTitle}>{recipe.strMeal}</Text>
      <Button title="Close" onPress={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  details: { padding: 20, backgroundColor: '#eee', marginTop: 10 },
  recipeTitle: { fontSize: 22, fontWeight: 'bold' }
});
