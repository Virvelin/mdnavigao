import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';

export function Updates() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5e0e7', // Pehmeä vaaleanpunainen tausta
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8e44ad', // Tummanlila väri
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.2)', // Tekstin varjo
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    textAlign: 'center', // Keskittää tekstin
  },
});
