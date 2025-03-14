// components/MainAppContainer.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import { fetchRecipes } from '../services/RecipesApi';

export default function MainAppContainer() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async () => {
    const results = await fetchRecipes(ingredients);
    setRecipes(results);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Finder</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter ingredients (comma-separated)"
        value={ingredients}
        onChangeText={setIngredients}
      />
      <Button title="Search" onPress={handleSearch} />
      <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }
});
