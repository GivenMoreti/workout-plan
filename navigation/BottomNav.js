import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import PlansScreen from '../screens/PlansScreen';
import ReminderScreen from '../screens/ReminderScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import DrawerBar from './DrawerBar';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
    return (

        <Tab.Navigator
            options={{

            }}

        >
            <Tab.Screen name="Home" component={DrawerBar}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (

                        <AntDesign name="home" size={24} color="black" />
                    ),
                }}

            />
            <Tab.Screen name="Plans" component={PlansScreen}
                options={{
                    tabBarLabel: "Plans",
                    tabBarIcon: ({ color, size }) => (

                        <FontAwesome name="pencil-square-o" size={24} color="black" />
                    ),
                }}
            />
            <Tab.Screen name="Reminders" component={ReminderScreen}
                options={{
                    tabBarLabel: "Reminder",
                    tabBarIcon: ({ color, size }) => (

                        <FontAwesome name="bell-o" size={24} color="black" />
                    ),
                }}

            />
            <Tab.Screen name="Analytics" component={AnalyticsScreen}
                options={{
                    tabBarLabel: "Analytics",
                    tabBarIcon: ({ color, size }) => (

                        <Ionicons name="analytics" size={24} color="black" />
                    ),
                }}

            />
        </Tab.Navigator>

    )
}

export default BottomNav

