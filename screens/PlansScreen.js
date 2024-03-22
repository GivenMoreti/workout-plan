import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from '../components/Item'

const PlansScreen = ({route}) => {
  const {itemId,itemName,itemImg} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* //<Item itemId /> */}
      {/* <Text>{itemId}</Text>
      <Text>{itemName}</Text> */}
      <Item image = {itemImg} title={itemName}/>

    </View>
  )
}

export default PlansScreen

const styles = StyleSheet.create({})