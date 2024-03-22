import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import Item from '../components/Item'

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';

const initialOffset = 200;

const PlansScreen = ({route}) => {

  const offset = useSharedValue(initialOffset);
  // for reanimating the 
  
  useEffect(() => {
  offset.value = withRepeat(withSpring(-offset.value), -1, true);
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));
  
  const {itemId,itemName,itemImg,itemDetails} = route.params;


  return (
    <View styles={styles.container}>
      {/* <Animated.View style={[styles.itemContainer , animatedStyles]} >
          //<Item image = {itemImg}  title={itemName} details={itemDetails} /> 
      </Animated.View> */}

      <View style={styles.itemContainer}>
       <Item image = {itemImg}  title={itemName} details={itemDetails} style={styles.img} />
      </View>
      <View style={styles.itemContainer2}>
        <Text>Videos</Text>
        <View style={styles.video}>
         
          <Text>video 1</Text>
       
        
          <Text>Timer</Text>
        
          
          <Text>play</Text>
        
       
        </View>
        
      </View>
      <View  style={styles.itemContainer3}>
        <Text>something</Text>
      </View>
     
    </View>
  )
}

export default PlansScreen

const styles = StyleSheet.create({
  container:{
    // justifyContent:"center",
    // alignItems:"center",
    width:"100%",
    margin:30,
    flex:1,
    borderWidth:1,

  }
  ,itemContainer:{
    width:"100%",
    alignItems:"center",
    marginTop:30,
    padding:10,
    borderWidth:1,
  
    },
  itemContainer2:{
    margin:10,
    padding:2,
    borderWidth:1,
    justifyContent:"space-between",
    alignItems:"center",
  
  },video:{
      flexDirection:"row",
      padding:10,
      margin:10,
      justifyContent:"space-around",
  },
  
  itemContainer3:{
    margin:10,
    padding:2,
    borderWidth:1,
    alignItems:"center",
   
  }
})