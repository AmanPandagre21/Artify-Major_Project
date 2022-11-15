import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Linking from "expo-linking";
import goku from '../assets/images/goku.jpg';
import CircleVector from "../components/CircleVector";
import { Avatar, Divider } from "react-native-paper";
import { ActivityIndicator, MD2Colors, Switch } from "react-native-paper";
import Rupee from "../assets/images/rupee.png";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants/Theme";
import { Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import ArtWork from "../assets/images/artwork.png";
// import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import Accordion from "../components/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { get_post_details } from "../slices/postSlice";
import Loader from "../components/loader";

const EditPost2 = () => {
  const [isPriceOn, setIsPriceOn] = useState(false);
  const onToggleSwitch = () => setIsPriceOn(!isPriceOn);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
        <CircleVector />
          <View
            style={{
              alignItems: "center",
              height: 100,
              width: "100%",
              position: "absolute",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                lineHeight: 48,
                color: "#363488",
                top: 80,
              }}
            >
              Edit Post
            </Text>
        </View>
        <Image source={goku} style = {styles.imagestyle}/>
        <View style={{flexDirection:'row',color:'#363488',marginTop:'8%'}}>
          <View style = {{width:'40%',marginLeft:'5%',height:50,backgroundColor:'#363488',borderRadius:10}}>
          <Text style={{fontSize:15,color:'white',textAlign:'center',marginTop:'10%'}}>
          ⭐ Goku
          </Text>
          </View>
          <View style = {{width:'40%',marginLeft:'10%',height:50,backgroundColor:'#363488',borderRadius:10}}>
          <Text style = {{fontSize:15,color:'white',textAlign:'center',marginTop:'10%'}}>
            20000 💰
          </Text>
          </View>
        </View>

            <View
              style={{
                marginTop: "6%",
                width: "95%",
                marginLeft: "3.5%",
                marginRight: "auto",
              }}
            >
              <Accordion
                title={"Description"}
                bodyText={'This is a sample description which can be replaced by aman pandagre in future through backend'}
              />
            </View>
        <TouchableOpacity
          style={{
            // backgroundColor:'red',
            height: "auto",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <AntDesign
            name="edit"
            size={35}
            color="#363488"
            style={{ marginTop: "4%"
          }}
          />
          <Text
            style={{
              // fontFamily:FONTS.bold,
              marginTop: "5%",
              fontSize: 18,
              marginRight: "42%",
              marginLeft: "4%",
            }}
          >
            Edit your post
          </Text>
          <AntDesign
              name="right"
              size={35}
              color="#363488"
              style={{ marginTop: "3%" }}
            />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            // backgroundColor:'red',
            height: "auto",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <AntDesign
            name="delete"
            size={35}
            color="#363488"
            style={{ marginTop: "4%" ,marginRight:'3%'}}
          />
          <Text
            style={{
              // fontFamily:FONTS.bold,
              marginTop: "5%",
              fontSize: 18,
              marginRight:'38%'
            }}
          >
            Delete post
          </Text>
          <AntDesign
              name="right"
              size={35}
              color="#363488"
              style={{ marginTop: "3%",marginLeft:'9%' }}
            />
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            // backgroundColor:'red',
            height: "auto",
            justifyContent: "center",
            flexDirection: "row",
            marginBottom:80
          }}
        >
          <MaterialCommunityIcons
            name="crosshairs-off"
            size={35}
            color="#363488"
            style={{ marginTop: "4%",marginRight:'3%' }}
          />
          <Text
            style={{
              // fontFamily:FONTS.bold,
              marginTop: "5%",
              fontSize: 18,
              marginRight:'24%'
            }}
          >
            Enable Price mode ?
          </Text>
          <Switch value={isPriceOn} onValueChange={onToggleSwitch}></Switch>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EditPost2;

const styles = StyleSheet.create({
  imagestyle : { 
      width:'90%', 
      height:300,
      marginLeft:'auto',
      marginRight:'auto',
      borderRadius:20,
      marginTop:'2%'},

})