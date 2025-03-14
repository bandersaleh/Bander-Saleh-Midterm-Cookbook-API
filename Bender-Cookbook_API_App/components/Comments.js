// components/Comments.js

// Import necessary components and libraries
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

// This component allows users to add and view comments for a recipe
// Props: (can only send data down the component tree (not up))
// - `recipeId`: The unique ID of the recipe being commented on
export default function Comments({ recipeId }) {
  const [comments, setComments] = useState([]); // useState hook to update the recipeId's comments
  const [newComment, setNewComment] = useState(''); // useState hook to store the new comment input

  // Function to add a new comment to the list
  const addComment = () => {
    if (newComment.trim()) { // Ensure the comment is not empty
      setComments([...comments, newComment]); // Append the new comment to the list
      setNewComment(''); // Clear the input field after adding the comment
    }
  };

  return (
    // Return everything from this View div
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>
      {/* Display the list of comments */}
      <FlatList data={comments} renderItem={({ item }) => <Text>{item}</Text>} />
      {/* Input field to add a new comment */}
      <TextInput style={styles.input} placeholder="Add a comment..." value={newComment} onChangeText={setNewComment} />
      {/* Button to submit a new comment */}
      <Button title="Post" onPress={addComment} />
    </View>
  );
}

// Define styles for the Comments component
const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 5, marginVertical: 5 }
});
