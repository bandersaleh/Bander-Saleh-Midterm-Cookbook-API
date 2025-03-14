// components/Rating.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Rating({ recipeId }) {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate this Recipe</Text>
      <View style={styles.buttons}>
        {[1, 2, 3, 4, 5].map((num) => (
          <Button key={num} title={`${num}★`} onPress={() => setRating(num)} />
        ))}
      </View>
      <Text>Current Rating: {rating}★</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold' },
  buttons: { flexDirection: 'row', marginVertical: 5 }
});