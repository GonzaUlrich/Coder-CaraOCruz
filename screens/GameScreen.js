import { Alert, Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import Card from '../components/Card';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let random = Math.floor(Math.random() * (max - min) + min);
  if(random==0){
    return "CARA";
  }
  else{
    return "CRUZ";
  }
}
var stateOfGame = "lose" ;


const GameScreen = ({ onEndGame, onGameOver , userOption}) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(0, 2));
  const [maxRounds, setmaxRounds] = useState(0)
  const [rounds, setRounds] = useState(0);
  const [win, setWin] = useState(false);

  

  const handleEndGame = () => {
    onEndGame(maxRounds);
  }

  const resultOfGame = (currentGuess, userOption) =>  {
      if(currentGuess==userOption){
        stateOfGame="win";
        return "GANASTE";
      }
      else{
        stateOfGame="lose";
        return "Perdiste :C"
    }
    
  }

  const handleNextGuess = () => {
    const nextNumber = generateRandomBetween(0, 2);
    setCurrentGuess(nextNumber);
    if(stateOfGame=="win"){
      setRounds( rounds=>rounds + 1);
      if(rounds>maxRounds){
        setmaxRounds(rounds);
      }
      
    }
    else{
      setRounds(0);
    }
  }
  
  let confirmedOutput = null;
  if(win){
    confirmedOutput =(
    <Text>Rondas Ganadoras:{rounds} </Text>
    );
  }

  return (
    <View style={styles.screen}>
      <Text>El resultado es..</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Text>{resultOfGame(currentGuess,userOption)}</Text>
        {/*confirmedOutput*/}
      </Card>
      <Button title="TERMINAR" onPress={handleEndGame} color={Colors.accent} />
      <Button title="OTRA VEZ" onPress={handleNextGuess} color={Colors.accent} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
    padding: 10,
    width: 300,
    maxWidth: '80%',
    marginBottom: 10,
  }
});

export default GameScreen;