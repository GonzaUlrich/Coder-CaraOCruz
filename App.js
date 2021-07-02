import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import AppLoading from 'expo-app-loading';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [userCoinSide, setUserCoinSide] = useState("");
  const [hiScore, setHiScore] = useState(0);
  const [dataLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  const handleGameOver = (score) => {
    setHiScore(score);
  }

  const handleRestart = (score) => {
    setUserCoinSide(null);
    console.log(score)
    setHiScore(score)
  }

  const handleStartGame = (coinSide) => {
    setUserCoinSide(coinSide);
    setHiScore(0);
  }

  let content = <StartGameScreen onStartGame={handleStartGame} onGameOver={() => { }} />;

  if (userCoinSide && hiScore <= 0) {
    content = <GameScreen onEndGame={handleRestart} userOption={userCoinSide} onGameOver={handleGameOver} />
  } 

  if (!dataLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Game" />
      {content}
      <Text style={styles.container} >MaxScore:{hiScore}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});
