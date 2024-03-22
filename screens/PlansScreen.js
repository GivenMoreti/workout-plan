import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Item from '../components/Item'

const PlansScreen = ({route}) => {
  const {itemId,itemName,itemImg,itemDetails} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Item image = {itemImg} title={itemName} details={itemDetails}/>

    </View>
  )
}

export default PlansScreen

const styles = StyleSheet.create({})