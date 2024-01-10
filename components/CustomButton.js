import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    return (
        <View>
            <Pressable onPress={props.onPress}>
                <Text>{props.title}</Text>
            </Pressable>
        </View>
    )
}

export default CustomButton;


