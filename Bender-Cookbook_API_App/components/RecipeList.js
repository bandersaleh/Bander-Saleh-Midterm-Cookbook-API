// ./components/RecipeList.js
import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RecipeList({ recipes, onSelect }) {
  return (
    <FlatList
      data={recipes}
      keyExtractor={(item) => item.idMeal}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelect(item)}>
          <Text style={styles.recipe}>{item.strMeal}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  recipe: { fontSize: 18, padding: 10, borderBottomWidth: 1 }
});
