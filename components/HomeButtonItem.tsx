import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";
import { View, Text } from "./Themed";

export const HomeButtonItem = (props:any) => {
  return (
    <View style={styles.container}>
      <Ionicons name={props.icon} size={30} color={Colors.darkOrange} />
      <View style={styles.container2}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.body}>{props.hint}</Text>
        <View style={{height:1, backgroundColor:Colors.lightOrange, width: 250, marginTop: 40}}/>
      </View>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: 10
    },
    container2: {
      flexDirection: 'column',
      flex: 1,
      alignItems: 'flex-start',
      paddingLeft: 20
    },
    title: {
      fontSize: 20,
      fontWeight: 'normal',
      padding: 0,
      color: Colors.violet
    },
    body: {
      fontSize: 15,
      fontWeight: 'normal',
      textAlign: 'justify',
      marginTop: 10
    },
    image: {
      height: 170,
      width: 170
    }
  });
