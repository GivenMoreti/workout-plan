import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// will later decide if they should be handled as components instead
import CommunityScreen from '../screens/DrawerScreens/CommunityScreen';
import ProgressScreen from '../screens/DrawerScreens/ProgressScreen';
import FeedScreen from '../screens/DrawerScreens/FeedScreen';
import LoginRegScreen from '../screens/Authentication/LoginRegScreen';
/*
npm install @react-navigation/drawer
npx expo install react-native-gesture-handler react-native-reanimated
 */
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './StackNav';
const Drawer = createDrawerNavigator();

const DrawerBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (

    <Drawer.Navigator
    initialRouteName='Home'
    screenOptions={{
      swipeEnabled:true,
      gestureEnabled:true,
      headerTitleAlign:"center",
      headerStyle:{
        backgroundColor:"skyblue"
      }
    }}
    >
      <Drawer.Screen name="Home is where the ❤️ is" component={StackNav} options={{
        headerShown: true,
      }} />
      <Drawer.Screen name={isLogin ? "Login" : "Logout"} component={LoginRegScreen} options={{
        headerShown: false,
      }} />

    </Drawer.Navigator>

  )
}

export default DrawerBar;

const styles = StyleSheet.create({})