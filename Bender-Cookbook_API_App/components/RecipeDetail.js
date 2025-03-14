// components/RecipeDetail.js
import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';

export default function RecipeDetail({ recipe, onClose }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: recipe.strMealThumb }} style={styles.image} />
      <Text style={styles.title}>{recipe.strMeal}</Text>
      <Text style={styles.instructions}>{recipe.strInstructions}</Text>
      <Button title="Close" onPress={onClose} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  image: { width: '50%', height: 200, alignSelf: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  instructions: { fontSize: 16, textAlign: 'center', marginVertical: 10 }
});
