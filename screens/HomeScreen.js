import { FlatList, Image, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";




import { FontAwesome } from '@expo/vector-icons';
import Item from "../components/Item";
import HeaderBar from "../components/HeaderBar";



const HomeScreen = ({navigation}) => {
  const data = [
    {
      id: 1,
      title: "Jog",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details:"Jog details",
    },
    {
      id: 2,
      title: "Hip",
      img: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      details:"HIp details",
    },
    {
      id: 3,
      title: "Bench press",
      img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      details:"bench press details",
    },
  ];

  // navigate on item
  const onPressItem = (itemId, itemName,itemImg,itemDetails) => {
    navigation.navigate('Plans', { itemId, itemName,itemImg,itemDetails });
  };


  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <HeaderBar/>
      </View>
     
      {/* start of component item */}
      <View
        style={styles.container4}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {/* internal text */}
        <View >
          <Text style={styles.message}>Consistency is key</Text>
        </View>
        <FlatList
          data={data}
          horizontal
          keyExtractor={data.key}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
  
            <Item image = {item.img}  title = {item.title} onPress = {()=>onPressItem(item.id,item.title,item.img,item.details)}/>
            
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
    marginBottom:4,
  },

  container2:{
    flex:0.2,
  },
  container4: {
    borderRadius: 10,
    marginTop: 0,
    flex: 0.5,
    padding: 2,
    width: "100%",
    borderWidth:1,

  },
  item: {
    margin: 5,
  },
  doingWell: {
    flex:0.2,
    flexDirection: "row",
    textAlign: "center",
    borderWidth:1,
    marginTop:1,
  },
  message: {
    fontSize: 20,
    textAlign: "center",
    padding:10,
    margin:5,
    fontWeight:"900",
    fontStyle:"normal",
    color:"gray",

  },
  
 
});
