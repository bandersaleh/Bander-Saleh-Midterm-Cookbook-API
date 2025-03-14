// services/RatedComments.js
import AsyncStorage from '@react-native-async-storage/async-storage'; //npm install @react-native-async-storage/async-storage


// Helper function to get stored data
async function getStoredData(key) {
  const data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : {};
}

// Get ratings for a recipe
export async function getRatings(recipeId) {
  const ratings = await getStoredData('ratings');
  return ratings[recipeId] || 0;
}

// Save rating for a recipe
export async function saveRating(recipeId, rating) {
  const ratings = await getStoredData('ratings');
  ratings[recipeId] = rating;
  await AsyncStorage.setItem('ratings', JSON.stringify(ratings));
}

// Get comments for a recipe
export async function getComments(recipeId) {
  const comments = await getStoredData('comments');
  return comments[recipeId] || [];
}

// Save comment for a recipe
export async function saveComment(recipeId, comment) {
  const comments = await getStoredData('comments');
  if (!comments[recipeId]) {
    comments[recipeId] = [];
  }
  comments[recipeId].push(comment);
  await AsyncStorage.setItem('comments', JSON.stringify(comments));
}

