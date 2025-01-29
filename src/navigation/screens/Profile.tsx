import { Text } from '@react-navigation/elements';
import { StaticScreenProps } from '@react-navigation/native';
import { StyleSheet, View, FlatList } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import React, { useState } from 'react';

type Props = StaticScreenProps<{
  user: string;
}>;

type Entry = {
  id: number;
  text: string;
};

export function Profile({ route }: Props) {
  const [entries, setEntries] = useState<Entry[]>([]); 
  const [text, setText] = useState(''); 
  const addEntry = () => {
    if (text.trim()) {
      const newEntry = { id: Date.now(), text };
      setEntries([...entries, newEntry]);  
      setText('');  
    }
  };
  const deleteEntry = (id: number) => {
    setEntries(entries.filter(entry => entry.id !== id)); 
  };

  return (
    <View style={styles.container}>
      <Text>{route.params.user}'s Profile</Text>

      <FlatList
        data={entries}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>{item.text}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => deleteEntry(item.id)}>Delete</Button>
            </Card.Actions>
          </Card>
        )}
      />

      <TextInput
        label="Share..."
        value={text}
        onChangeText={setText}
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" onPress={addEntry} style={styles.addButton}>
        Add Entry
      </Button>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f4c2c2', 
    marginBottom: 20,
    fontFamily: 'serif', 
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff5f8', 
    shadowColor: '#ff69b4', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  entryText: {
    fontSize: 18,
    color: '#f2a1d1', 
    fontFamily: 'serif', 
  },
  deleteButton: {
    backgroundColor: '#fff5f8', 
    borderRadius: 10,
    width: 80,  
    height: 35,  
    justifyContent: 'center',  
    alignItems: 'center',  
    padding: 5, 
  },
  input: {
    width: '90%',
    backgroundColor: '#fff', 
    marginBottom: 20,
    fontFamily: 'serif', 
  },
  addButton: {
    backgroundColor: '#f4c2c2',
    borderRadius: 20,
  },
});