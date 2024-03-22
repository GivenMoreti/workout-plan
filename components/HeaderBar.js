import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HeaderBar = ({navigation}) => {
  return (

      <View style={styles.container2}>
        <View style={styles.container5}>
          <Foundation name="calendar" size={40} color="white" />
          <Text style={styles.details}  onPress={() => navigation.push('Plans')}>Details</Text>
          <Feather name="arrow-right" size={40} color="white" />
        </View>
        <View>
          <Text style={styles.nextWorkout}>Next workout</Text>
        </View>

        <View style={styles.container3}>
          <SimpleLineIcons name="clock" size={40} color="white" />
          <Text>60 min</Text>
        </View>
      </View>
  
  )
}

export default HeaderBar

const styles = StyleSheet.create({
    container2: {
        // flex: 1,
        padding: 10,
        width: "100%",
        // backgroundColor: "#40A2E3",
        borderRadius: 10,
        shadowColor: "blue",
        justifyContent: "space-between",
        borderWidth:1,
      },
  container5: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container3: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },

})