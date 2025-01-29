import React, { useState } from 'react';
import { Text } from '@react-navigation/elements'; 
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export function Settings() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming soon</Text>
      <Button mode="contained" style={styles.button}>Stay tuned!</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5e0e7', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8e44ad', 
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.2)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  button: {
    backgroundColor: '#f4c2c2', 
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
