import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'


const Item = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.itemContainer}>
        <Image source={{uri:props.image}}  style={{ width: 200, height: 200 }}/>
        <Text  style={styles.title}>{props.title}</Text>
        <Text style={styles.details}>{props.details}</Text>
    </TouchableOpacity>
  )
}

export default Item

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 15,
        color: "#40A2E3",
      },
      details:{
        padding:10,
      },
      itemContainer:{
        margin:5,
      }
})