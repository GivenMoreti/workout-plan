import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React,{useEffect} from 'react'
import Item from '../components/Item'
import { Video } from 'expo-av';

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
    <ScrollView styles={styles.container}>
      {/* <Animated.View style={[styles.itemContainer , animatedStyles]} >
          //<Item image = {itemImg}  title={itemName} details={itemDetails} /> 
      </Animated.View> */}

      <View style={styles.itemContainer}>
       <Item image = {itemImg}  title={itemName} details={itemDetails} style={styles.img} />
      </View>
      <View style={styles.itemContainer2}>
        <Text>fOLLOW VIDEO EXERCISES</Text>
        <View style={styles.video}>
         

            <Video
              source={{ uri: 'https://v3.cdnpk.net/videvo_files/video/free/2014-12/large_preview/Raindrops_Videvo.mp4' }}
              style={{ flex: 1 ,height:100,width:200,}}
              controls={true}
              useNativeControls
              resizeMode="contain"
            />
            <View>
              <Text>something</Text>
            </View>
            
        
        
       
        </View>
        
      </View>
      <View  style={styles.itemContainer3}>
        <Text>FOLLOW STEPS</Text>
        <Text>Step 1</Text>
        <Text>Step 1</Text>
        <Text>Step 1</Text>
        <Text>Step 1</Text>
      </View>
     
    </ScrollView>
  )
}

export default PlansScreen

const styles = StyleSheet.create({
  container:{
    // justifyContent:"center",
    // alignItems:"center",
    width:"100%",
    margin:30,
    flex:3,
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
    flex:0,
    height:200,
  
  },video:{
    alignItems:"flex-start",
      flexDirection:"col",
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