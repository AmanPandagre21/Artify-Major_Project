import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
export default function loader() {
  return (
    <View style={styles.loaderDesign}>
      <ActivityIndicator  size={70} animating={true} color={"#363488"} />
      <Text style={{color:"#363488"}}>LOADING...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    loaderDesign:{
       marginTop:"auto",
       marginBottom:"auto",
       marginLeft:"auto",
       marginRight:"auto",
      
    }
  });