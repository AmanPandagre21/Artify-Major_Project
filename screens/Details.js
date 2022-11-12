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
import CircleVector from "../components/CircleVector";
import { Avatar } from "react-native-paper";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import AvtarImg from "../assets/images/person01.png";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants/Theme";
import { Ionicons } from "@expo/vector-icons";
import product from "../assets/images/shoes.jpg";
// import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import Accordion from "../components/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { get_post_details } from "../slices/postSlice";

const Details = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { post, status: postStatus } = useSelector((state) => state.posts);

  const { artist } = useSelector((state) => state.artist);

  console.log(artist);

  useEffect(() => {
    if (route.params.postId) {
      dispatch(get_post_details(route.params.postId));
    }
  }, [route, dispatch]);

  return !post || postStatus.type === "loading" ? (
    <ActivityIndicator animating={true} color={MD2Colors.red800} />
  ) : (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
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
              Product Details
            </Text>
          </View>
          <View style={styles.profileView}>
            <View style={{flexDirection:'row'}}>
            <Avatar.Image
              size={30}
              source={{ uri: post && post.artist.avatar.url }}
              style={{ marginLeft: 20 }}
            />

            <TouchableOpacity
              onPress={() =>
                navigation.navigate("SellerProfile", {
                  artId: post && post.artist._id,
                })
              }
            >
              <Text style={styles.ProfileName}>{post && post.artist.name}</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(`tel:₹{post && post.artist.phone}`)
              }
            >
              <Ionicons name="call-outline" size={24} color="#363488" />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", marginTop: "5%" }}>
            <Image
              source={{ uri: post && post.image.url }}
              style={styles.productImage}
            />
            <Text style={styles.productTitle}>{post && post.title}</Text>
            <Text style={{ fontSize: 20, color: "#363488" }}>
              {post && post.amount}$
            </Text>
          </View>
          <View style={styles.descriptionCard}>
          <View style={{ marginBottom:'4%',width: "100%", height: 40, marginTop: "2%" }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#363488",
                marginTop: "3%",
                fontSize:18,
                marginLeft:'5%'
              }}
            >
              Product Category
            </Text>
            <Text
              style={{
                color:'white',
                marginLeft: "5%",
                fontSize:18,
                marginTop: "2%",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {post && post.category.name}
            </Text>
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
              bodyText={post && post.description}
            />
          </View>
          
          
          {post && post.amount !== 0 ? (
            <TouchableOpacity
              style={{ height: 160 }}
              disabled={artist._id === post.artist._id ? true : false}
              onPress={() =>
                navigation.navigate("ShippingAddress", {
                  sellerId: post.artist._id,
                  itemId: post._id,
                  amount: post.amount,
                })
              }
            >
              <View
                style={{
                  backgroundColor:
                    artist._id === post.artist._id ? "#808080" : "#363488",
                  width: "80%",
                  height: "35%",
                  borderRadius: 15,
                  marginLeft: "10%",
                  marginTop: "7%",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginTop: "6%",
                    textAlign: "center",
                  }}
                >
                  {artist._id === post.artist._id
                    ? " Its your product"
                    : "Proceed to pay"}
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <Text></Text>
          )}
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  profileView: {
    marginTop: "2%",
    flexDirection: "row",
    width: "90%",
    position: "relative",
    //marginLeft:"auto",
    marginRight: "auto",
    height: "auto",
    justifyContent:"space-between"
  },
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  ProfileName: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 10,
    marginRight: "auto",
    color: "#363488",
  },
  productImage: {
    width: 340,
    height: 280,
    borderRadius: 20,
  },
  productTitle: {
    fontSize: 20,
    marginTop: "5%",
    fontStyle: "italic",
    //   fontFamily:FONTS.bold,
    color: "#363488",
    fontWeight: "bold",
  },
  descriptionCard : {
    width:'90%',
    height:'27%',
    padding:'2%',
    marginLeft:'6%',
    marginTop:'8%',
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(133, 133, 185, 0.75)",
    borderRadius: 12,
    border: "1px solid rgba(255, 255, 255, 0.125)"
  }
});
