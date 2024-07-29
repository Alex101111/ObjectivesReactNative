// ObjectivesInput.js
import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

const ObjectivesInput = ({ onAddObjective }) => {
  const [objective, setObjective] = useState('');

  const addObjectiveHandler = () => {
    if (objective.length > 0) {
      onAddObjective(objective);
      setObjective('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter a new objective"
        style={styles.input}
        value={objective}
        onChangeText={setObjective}
      />
      <Button title="Add Objective" onPress={addObjectiveHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
});

export default ObjectivesInput;
