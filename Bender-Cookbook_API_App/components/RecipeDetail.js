// components/RecipeDetail.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';

export default function RecipeDetail({ recipe, onClose }) {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{recipe.strMeal}</Text>
      {recipe.strInstructions ? (
        <Text style={styles.instructions}>{recipe.strInstructions}</Text>
      ) : (
        <Text style={styles.instructions}>No instructions available.</Text>
      )}
      <Button title="Close" onPress={onClose} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  image: { width: '50%', aspectRatio: 1, alignSelf: 'center', marginBottom: 10, resizeMode: 'contain' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  instructions: { fontSize: 16, textAlign: 'left', marginBottom: 10 }
});
