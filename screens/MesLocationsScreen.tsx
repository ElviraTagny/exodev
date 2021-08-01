import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LocationsEnCoursScreen from './LocationsEnCoursScreen';
import LocationsTermineesScreen from './LocationsTermineesScreen';

const Tab = createMaterialTopTabNavigator();

export default function MesLocationsScreen() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="En cours" component={LocationsEnCoursScreen} />
        <Tab.Screen name="Terminées" component={LocationsTermineesScreen} />
      </Tab.Navigator>
    );
}

  /*return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes locations</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/MesLocationsScreen.tsx" />
    </View>
  );*/
//}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
