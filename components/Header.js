import { Platform, StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';
import Constants from 'expo-constants';
import React from 'react';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 150,
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: 'open-sans-bold',
  },
  image: {
    width: 20,
    height: 20,
  }
});

export default Header;