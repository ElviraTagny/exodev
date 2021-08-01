import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function LocationsEnCoursScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={
          require('../assets/images/icon.png')
      }/>
      <Text style={styles.title}>Pas de locations</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    color: Colors.violet
  },
  image: {
    height: 170,
    width: 170
  }
});
