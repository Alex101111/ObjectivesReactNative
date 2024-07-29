// ObjectivesList.js
import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

const ObjectivesList = ({ objectives, onRemoveObjective }) => {
  return (
    <FlatList
      data={objectives}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text>{item.value}</Text>
          <TouchableOpacity onPress={() => onRemoveObjective(item.key)}>
            <Text style={styles.deleteButton}>X</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
  },
  deleteButton: {
    color: 'red',
  },
});

export default ObjectivesList;
