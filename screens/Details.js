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
import { Avatar, Divider } from "react-native-paper";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import Rupee from "../assets/images/rupee.png";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants/Theme";
import { Ionicons } from "@expo/vector-icons";
import ArtWork from "../assets/images/artwork.png";
// import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import Accordion from "../components/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { get_post_details } from "../slices/postSlice";
import Loader from "../components/loader";
const Details = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { post, status: postStatus } = useSelector((state) => state.posts);

  const { artist } = useSelector((state) => state.artist);

  useEffect(() => {
    if (route.params.postId) {
      dispatch(get_post_details(route.params.postId));
    }
  }, [route, dispatch]);

  return !post || postStatus.type === "loading" ? (
    // <ActivityIndicator animating={true} color={MD2Colors.red800} />
    <Loader/>
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
            <View style={{ flexDirection: "row" }}>
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
                <Text style={styles.ProfileName}>
                  {post && post.artist.name}
                </Text>
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
          </View>
          {/* <View> */}
          <View
            style={{
              width: "100%",
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <View
              style={{
                width: "40%",
                height: 150,
                borderRadius: 10,
                ...SHADOWS.dark,
                opacity: 2,
                paddingTop: 10,
                backgroundColor: "#fceabb",
                background: "linear-gradient(to right, #fceabb, #f8b500)",
              }}
            >
              <Image
                source={ArtWork}
                style={{
                  width: 90,
                  height: 90,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: "#363488",
                  textAlign: "center",
                  letterSpacing: 1,
                  fontWeight: "bold",
                  margin: "2%",
                  textTransform: "capitalize",
                }}
              >
                {post && post.category.name}
              </Text>
            </View>
            <Divider
              style={{ backgroundColor: COLORS.PrimaryColor, height: 2 }}
            />

            <View
              style={{
                width: "40%",
                height: 150,
                borderRadius: 10,
                ...SHADOWS.dark,
                paddingTop: 10,
                backgroundColor: "#f7971e",
                background: "linear-gradient(to right, #f7971e, #ffd200)",
              }}
            >
              <Image
                source={Rupee}
                style={{
                  width: 90,
                  height: 90,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <Text
                style={{
                  fontSize: 26,
                  color: "#363488",
                  textAlign: "center",
                  letterSpacing: 1,
                  fontWeight: "bold",
                }}
              >
                {post && post.amount}$
              </Text>
            </View>
          </View>
          {/* </View> */}
          <View style={styles.descriptionCard}>
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
                style={{ height: 100 }}
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
                    height: 50,
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
    justifyContent: "space-between",
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
    width: 380,
    height: 280,
    borderRadius: 20,
  },
  productTitle: {
    fontSize: 30,
    marginTop: "3%",
    marginBottom: "3%",
    textTransform: "capitalize",
    color: "#363488",
    fontWeight: "bold",
  },
  descriptionCard: {
    width: "90%",
    height: "auto",
    padding: "4%",
    marginLeft: "6%",
    marginTop: "8%",
    marginBottom: "8%",
    backgroundColor: COLORS.PrimaryColor,
    ...SHADOWS.dark,
    borderRadius: 12,
    border: "1px solid rgba(255, 255, 255, 0.125)",
  },
});
