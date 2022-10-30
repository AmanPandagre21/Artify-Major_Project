import React from "react";
import { StyleSheet,Text,View } from "react-native";
const HeaderText=(props)=>{
    return(
<View style={{alignItems:"center",height:100,margin:0,padding:0,width:"100%",position:"absolute"}} >
        <Text style={styles.headerText}>{props.content}</Text>
          </View>
    )
}
const styles=StyleSheet.create(
    {
        headerText:{
            // fontFamily: 'Poppins',
            fontWeight:"bold",
            fontSize: 30,
            lineHeight: 48,
            color:"#363488",
            // left: 49,
             top: 100
        },
    }
)
export default HeaderText;