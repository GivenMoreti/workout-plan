import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { FontAwesome } from '@expo/vector-icons';
const HomeScreen = () => {
  const data = [
    {
      id: 1,
      title: "Jog",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Hip",
      img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    },
    {
      id: 3,
      title: "Bench press",
      img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.container5}>
          <Foundation name="calendar" size={40} color="white" />
          <Text style={styles.details}>Details</Text>
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
      <View style={styles.doingWell}>
        <Text style={styles.message}>You are doing well</Text>
        <FontAwesome name="flag-checkered" size={30} color="#40A2E3" />
      </View>
      <View
        style={styles.container4}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <FlatList
          data={data}
          horizontal
          keyExtractor={data.key}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image
                source={{ uri: item.img }}
                style={{ width: 200, height: 200 }}
              />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 15,
    color: "#40A2E3",
  },
  item: {
    margin: 5,
  },
  doingWell: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  message: {
    fontSize: 30,
    color: "#40A2E3",
    textAlign: "center",

  },
  container: {
    flex: 3,
    padding: 10,
    backgroundColor: "#fff",
  },
  container2: {
    flex: 1,
    padding: 10,
    width: "100%",
    height: 100,
    backgroundColor: "#40A2E3",
    borderRadius: 10,
    shadowColor: "blue",
    justifyContent: "space-between",
  },
  nextWorkout: {
    fontSize: 30,
    fontWeight: "700",
    color: "#fff",
  },
  container3: {
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  container4: {
    borderRadius: 10,
    marginTop: 10,
    flex: 1,
    padding: 10,
    width: "100%",
    height: 200,
    // backgroundColor: "gray",
  },
  container5: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  details: {
    fontSize: 20,
    color: "white",
  },
});
