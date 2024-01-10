import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    )
}

export default StackNav

const styles = StyleSheet.create({})