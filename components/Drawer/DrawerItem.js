import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DrawerItem = (props) => {
    return (
        <View>
            <Text onPress={props.onPress} >{props.title}</Text>
        </View>
    )
}

export default DrawerItem
