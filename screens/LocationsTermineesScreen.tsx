import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function LocationsTermineesScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={
          require('../assets/images/icon.png')
      }/>
      <Text style={styles.title}>Vos locations</Text>
      <Text style={styles.body}>C'est ici que nous garderons la trace de toutes vos locations.</Text>

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
  body: {
    fontSize: 15,
    fontWeight: 'normal',
    marginTop: 20,
    textAlign: 'center'
  },
  image: {
    height: 170,
    width: 170
  }
});
