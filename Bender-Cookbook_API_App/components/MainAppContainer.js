// components/MainAppContainer.js

// Import necessary components and libraries
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import Rating from './Rating';
import Comments from './Comments';
import { fetchRecipes } from '../services/RecipesApi';
import { getRatings, getComments, saveRating, saveComment } from '../services/RatedComments';

export default function MainAppContainer() {
  // Initialize new useState functions to handle updating data
  const [ingredients, setIngredients] = useState(''); // State to manage search input
  const [recipes, setRecipes] = useState([]); // State to store fetched recipes
  const [selectedRecipe, setSelectedRecipe] = useState(null); // State to track selected recipe for details view
  const [loading, setLoading] = useState(false); // State to handle loading indicator
  const [error, setError] = useState(null); // State to handle error messages
  
  // useEffect is a React Hook that lets you synchronize a component with an external api system we are using via '../services/RecipesApi.js'
  useEffect(() => {
    // If SearchBar Component is empty, return empty array.
    if (ingredients.trim() === '') {
      setRecipes([]);
      return;
    }
    
    // IfElse, push Ingredient results to array[ingredients] 
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

  // Return MainAppContainer Component's results
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Finder</Text>
      <SearchBar ingredients={ingredients} setIngredients={setIngredients} />
      {/* Show loading indicator when fetching data */}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {/* Display error message if fetching fails */}
      {error && <Text style={styles.error}>{error}</Text>}
      {/* Display list of fetched recipes */}
      <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
      {/* Show recipe details, rating, and comments when a recipe is selected */}
      {selectedRecipe && (
        <ScrollView contentContainerStyle={styles.detailContainer}>
          <RecipeDetail recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
          <Rating recipeId={selectedRecipe.idMeal} saveRating={saveRating} getRatings={getRatings} />
          <Comments recipeId={selectedRecipe.idMeal} saveComment={saveComment} getComments={getComments} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
  detailContainer: { borderWidth: 5, borderColor: '#000', padding: 10, borderRadius: 10, marginTop: 20 }
});