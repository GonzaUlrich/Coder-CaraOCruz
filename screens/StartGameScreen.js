import {
  Button,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = ({ onStartGame }) => {
  const [confirmedCara, setConfirmedCara] = useState(false);
  const [confirmedCruz, setConfirmedCruz] = useState(false);
  const [confirmedValue, setConfirmedValue] = useState('');



  const handleCara = () => {
    setConfirmedCruz(false);
    setConfirmedCara(true);
    setConfirmedValue("CARA");
  }

  const handleCruz = () => {
    setConfirmedCara(false);
    setConfirmedCruz(true);
    setConfirmedValue("CRUZ");
  }

  const handleStartGame = () => {
    onStartGame(confirmedValue);
  }

  let confirmedOutput = null;
  if (confirmedCara) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Tu selección</Text>
        <NumberContainer>{confirmedValue}</NumberContainer>
        <Button title="EMPEZAR JUEGO" color={Colors.primary} onPress={handleStartGame} />
      </Card>
    );
  }
  if (confirmedCruz) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Tu selección</Text>
        <NumberContainer>{confirmedValue}</NumberContainer>
        <Button title="EMPEZAR JUEGO" color={Colors.primary} onPress={handleStartGame} />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={30}
        style={styles.screen}
      >
        <ScrollView>
          <Text style={styles.title}>Cara o Cruz</Text>
          <Card style={styles.inputContainer}>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Cara" onPress={handleCara} color={Colors.accent} style={styles.button} />
              </View>
              <View style={styles.button}>
                <Button title="Cruz" onPress={handleCruz} color={Colors.primary} style={styles.button} />
              </View>
            </View>
          </Card>
          {confirmedOutput}
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
  },
  inputContainer: {
    width: '80%',
    minWidth: 300,
    maxWidth: '90%',
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    textAlign: "center",
    paddingHorizontal: 15,
  },
  input: {
    width: 100,
  },
  button: {
    width: Dimensions.get('window').width / 3,
  },
  summaryContainer: {
    marginVertical: 10,
    padding: 10,
    textAlign: "center",
  }
});

export default StartGameScreen;