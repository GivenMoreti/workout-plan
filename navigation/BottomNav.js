import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import PlansScreen from '../screens/PlansScreen';
import ReminderScreen from '../screens/ReminderScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import DrawerBar from './DrawerBar';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const BottomNav = () => {
    return (

        <Tab.Navigator
        options={{
            
        }}
        
        >
            <Tab.Screen name="Home" component={DrawerBar} 
            
            
            />
            <Tab.Screen name="Plans" component={PlansScreen} />
            <Tab.Screen name="Reminders" component={ReminderScreen} />
            <Tab.Screen name="Analytics" component={AnalyticsScreen} />
        </Tab.Navigator>

    )
}

export default BottomNav

