import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Alert } from 'react-native';
import { Button, StyleSheet } from 'react-native';
import { HomeButtonItem } from '../components/HomeButtonItem';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function RechercheScreen() {
  /*return (
    <View style={styles.container}>
      <Text style={styles.title}>Recherche</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/RechercheScreen.tsx" />
    </View>
  );*/
  return (
    <View style={styles.container}>
      <HomeButtonItem
              title="ADRESSE DE LOCATION"
              hint="Saisissez une adresse, gare..."
              icon='map'
            />
            <HomeButtonItem
              title="DATE DE DEPART"
              hint="Aujourd'hui"
              icon='calendar'
            />
            <HomeButtonItem
              title="DATE DE RETOUR"
              hint=""
              icon='calendar'
            />
            <HomeButtonItem
              title="DISTANCE"
              hint="100 km"
              icon='car'
            />
            <Button color={Colors.blue} title='Rechercher' onPress={() => Alert.alert('Rechercher button pressed')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  }
});
