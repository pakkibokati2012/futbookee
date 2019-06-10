import React from 'react';
import { Image, StyleSheet } from 'react-native';

const logo = () => {
  return (
    <Image
      style={styles.logo}
      source={require('futbookee/assets/football.png')}
    />
  );
};

export default logo;

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50
  }
});
