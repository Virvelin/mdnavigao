import {  Text } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export function Home() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell me</Text>
      <Text style={styles.subtitle}>something</Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Profile', { user: '' })}
        style={styles.button}
      >
        Go to Profile
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Settings')}
        style={styles.button}
      >
        Go to Settings </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7e3e6', 
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#f4c2c2', 
    marginBottom: 10,
    fontFamily: 'serif', 
  },
  subtitle: {
    fontSize: 24,
    color: '#f2a1d1', 
    fontFamily: 'serif', 
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#f4c2c2', 
    borderRadius: 20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
