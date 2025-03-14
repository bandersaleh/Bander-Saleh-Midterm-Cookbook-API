// components/Comments.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function Comments({ recipeId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments</Text>
      <FlatList data={comments} renderItem={({ item }) => <Text>{item}</Text>} />
      <TextInput style={styles.input} placeholder="Add a comment..." value={newComment} onChangeText={setNewComment} />
      <Button title="Post" onPress={addComment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 18, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 5, marginVertical: 5 }
});
