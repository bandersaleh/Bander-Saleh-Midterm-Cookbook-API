// components/Rating.js

// Import necessary components and libraries
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// This component allows users to rate a recipe
// Props: (can only send data down the component tree (not up))
// - `recipeId`: The unique ID of the recipe being rated
export default function Rating({ recipeId }) {
  const [rating, setRating] = useState(0); // useState hook to update selected recipeId's ratings

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate this Recipe</Text>
      <View style={styles.buttons}>
        {/* Create a button for each rating from 1 to 5 */}
        {[1, 2, 3, 4, 5].map((num) => (
          <Button key={num} title={`${num}★`} onPress={() => setRating(num)} />
        ))}
      </View>
      {/* Display the current selected rating */}
      <Text>Current Rating: {rating}★</Text>
    </View>
  );
}

// Define styles for the Rating component
const styles = StyleSheet.create({
  container: { padding: 10, alignItems: 'center' },// Center align content
  title: { fontSize: 18, fontWeight: 'bold' }, // Style for the title
  buttons: { flexDirection: 'row', marginVertical: 5 } // Arrange buttons in a row
});
