import { StyleSheet, Text, View } from 'react-native'
import React, { createContext,useState } from 'react'
import DrawerItem from '../../components/Drawer/DrawerItem'
import LoginRegScreen from '../Authentication/LoginRegScreen';
// imports all the drawer screens.

//apply use Context Hook
export const drawerItemsContext = createContext(null);

const DrawerHomeScreen = (props) => {
    const [user, setUser] = useState("");
    return (

        <drawerItemsContext.Provider value={(user,setUser)}>
            <Text>Hello {user}</Text>
            <DrawerItem title={"About"} onPress={() => Linking.openURL('https://github.com/GivenMoreti')} />
            {/* render loginRegister */}
            <LoginRegScreen />
        </drawerItemsContext.Provider>
    )
}



export default DrawerHomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
})