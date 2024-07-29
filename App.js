// App.js
import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import ObjectivesInput from './ObjectivesInput';
import ObjectivesList from './ObjectivesList';

export default function App() {
  const [objectivesList, setObjectivesList] = useState([]);

  const addObjective = (objective) => {
    setObjectivesList([...objectivesList, { key: Math.random().toString(), value: objective }]);
  };

  const removeObjective = (objectiveKey) => {
    setObjectivesList(objectivesList.filter(obj => obj.key !== objectiveKey));
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' }} 
      style={styles.background}
    >
      <View style={styles.container}>
        <ObjectivesInput onAddObjective={addObjective} />
        <ObjectivesList objectives={objectivesList} onRemoveObjective={removeObjective} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
