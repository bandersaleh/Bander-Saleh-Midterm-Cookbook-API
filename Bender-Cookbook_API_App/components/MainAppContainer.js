// components/MainAppContainer.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import { fetchRecipes } from '../services/RecipesApi';

export default function MainAppContainer() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //useEffect is a React Hook that lets you synchronize a component with an external system api
  useEffect(() => {
    if (ingredients.trim() === '') {
      setRecipes([]);
      return;
    }
    
    const fetchRecipeData = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await fetchRecipes(ingredients);
        setRecipes(results);
      } catch (err) {
        setError('Failed to fetch recipes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchRecipeData();
  }, [ingredients]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Finder</Text>
      <SearchBar ingredients={ingredients} setIngredients={setIngredients} />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.error}>{error}</Text>}
      <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 }
});
