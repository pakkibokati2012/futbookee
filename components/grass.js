import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const grass = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.grass}
        source={require('futbookee/assets/grass.png')}
      />
    </View>
  );
};

export default grass;

const styles = StyleSheet.create({
  grass: {
    width: Dimensions.get('window').width
  },
  container: {
    marginLeft: -15,
    position: 'absolute',
    bottom: 0
  }
});
