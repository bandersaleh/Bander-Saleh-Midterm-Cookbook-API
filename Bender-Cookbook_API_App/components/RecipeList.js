// components/RecipeList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Rating from './Rating';

export default function RecipeList({ recipes, onSelect }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.recipeItem} onPress={() => onSelect(item)}>
      <Text style={styles.recipeName}>{item.strMeal}</Text>
      <Rating recipeId={item.idMeal} />
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={recipes}
      renderItem={renderItem}
      keyExtractor={(item) => item.idMeal}
    />
  );
}

const styles = StyleSheet.create({
  recipeItem: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  recipeName: { fontSize: 18, fontWeight: 'bold' }
});