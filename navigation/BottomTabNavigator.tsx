/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import RechercheScreen from '../screens/RechercheScreen';
import MesLocationsScreen from '../screens/MesLocationsScreen';
import { BottomTabParamList, RechercheParamList as RechercheParamList, MesLocationsParamList as MesLocationsParamList, MonCompteParamList as MonCompteParamList } from '../types';
import MonCompteScreen from '../screens/MonCompteScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Recherche"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Recherche"
        component={RechercheNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Locations"
        component={MesLocationsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-car" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Compte"
        component={MonCompteNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const RechercheStack = createStackNavigator<RechercheParamList>();

function RechercheNavigator() {
  return (
    <RechercheStack.Navigator>
      <RechercheStack.Screen
        name="RechercheScreen"
        component={RechercheScreen}
        options={{ headerTitle: 'Recherche' }}
      />
    </RechercheStack.Navigator>
  );
}

const MesLocationsStack = createStackNavigator<MesLocationsParamList>();

function MesLocationsNavigator() {
  return (
    <MesLocationsStack.Navigator>
      <MesLocationsStack.Screen
        name="MesLocationsScreen"
        component={MesLocationsScreen}
        options={{ headerTitle: 'Mes locations' }}
      />
    </MesLocationsStack.Navigator>
  );
}

const MonCompteStack = createStackNavigator<MonCompteParamList>();

function MonCompteNavigator() {
  return (
    <MonCompteStack.Navigator>
      <MonCompteStack.Screen
        name="MonCompteScreen"
        component={MonCompteScreen}
        options={{ headerTitle: 'Mon compte' }}
      />
    </MonCompteStack.Navigator>
  );
}
