import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions } from 'react-native';
import Card from '../components/Card';

const GameOverScreen = ({ rounds, choice, onRestart }) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get('window');
    return dim.height >= dim.width;
  }

  const statePortrait = () => setIsPortrait(onPortrait());

  useEffect(() => {
    Dimensions.addEventListener('change', statePortrait);
    setIsPortrait(onPortrait());

    return () => {
      Dimensions.removeEventListener('change', statePortrait);
    }
  }, []);

  return (
    <View style={isPortrait ? styles.screen : styles.screenLandscape}>
      <Image
        style={isPortrait ? styles.image : styles.imageLandscape}
        source={require('../assets/images/GameOver.png')}
        resizeMode="contain"
      />
      <View>
        <Card style={styles.resultContainer}>
          <Text>Intentos: {rounds}</Text>
          <Text>El número era: {choice}</Text>
        </Card>
        <Button title="NUEVO JUEGO" onPress={onRestart} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenLandscape: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    marginBottom: 30,
    padding: 20,
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 300,
  },
  imageLandscape: {
    width: '50%',
    height: 300,
  },
});

export default GameOverScreen;