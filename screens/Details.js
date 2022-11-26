import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as Linking from "expo-linking";
import CircleVector from "../components/CircleVector";
import { Chip } from "react-native-paper";
import { Avatar, Divider } from "react-native-paper";
import { COLORS, SHADOWS } from "../constants/Theme";
import { Ionicons } from "@expo/vector-icons";
import AvatarLogo from "../assets/images/_avatar_.png";
import { useDispatch, useSelector } from "react-redux";
import { get_post_details } from "../slices/postSlice";
import Loader from "../components/loader";
import ReadMore from "react-native-read-more-text";

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
    <Loader />
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
              {post.artist.avatar ? (
                <Avatar.Image
                  size={30}
                  source={{ uri: post.artist.avatar && post.artist.avatar.url }}
                  style={{ marginLeft: 20 }}
                />
              ) : (
                <Avatar.Image
                  size={30}
                  source={AvatarLogo}
                  style={{ marginLeft: 20 }}
                />
              )}

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
          </View>
          <View
            style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
          >
            <Text style={styles.productTitle}>{post && post.title}</Text>
          </View>
          <Divider
            style={{
              backgroundColor: COLORS.PrimaryColor,
              height: 2,
              width: "90%",
              marginRight: "auto",
              marginLeft: "auto",
              marginTop: "4%",
            }}
          />
          {/* <View> */}
          <View
            style={{
              width: "100%",
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-evenly",
              marginTop: "5%",
            }}
          >
            <View
              style={{
                width: "90%",
                // height: 150,
                // borderRadius: 10,
                // ...SHADOWS.dark,
                opacity: 2,
                // paddingTop: 10,

                marginLeft: "auto",
                marginRight: "auto",
                flexDirection: "row",
                // background: "linear-gradient(to right, #fceabb, #f8b500)",
              }}
            >
              {/* <Image
                source={ArtWork}
                style={{
                  width: 90,
                  height: 90,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              /> */}
              {/* <Text
              style={{
                  fontSize: 20,
                  color: "#363488",
                  // textAlign: "center",
                  // letterSpacing: 1,
                  fontWeight: "bold",
                 backgroundColor:"black",
                  textTransform: "capitalize",
                  marginLeft:"auto"
                }}
              >
              Product Category :-
              </Text> */}
              <Text
                style={{
                  fontSize: 20,
                  color: "#363488",
                  // textAlign: "center",
                  letterSpacing: 1,
                  fontWeight: "bold",
                  margin: "2%",
                  textTransform: "capitalize",
                  //marginLeft:"auto"
                }}
              >
                product Details :-
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#363488",
                  // textAlign: "center",
                  letterSpacing: 1,
                  fontWeight: "bold",
                  margin: "2%",
                  textTransform: "capitalize",
                  marginRight: 400,
                  width: "50%",
                }}
              >
                {post && post.category.name}
              </Text>
            </View>
            {/* <Divider
              style={{ backgroundColor: COLORS.PrimaryColor, height: 2 }}
            /> */}

            <View
              style={{
                width: "90%",
                // height: 150,
                // borderRadius: 10,
                // ...SHADOWS.dark,
                // paddingTop: 10,
                // backgroundColor: "#f7971e",
                // background: "linear-gradient(to right, #f7971e, #ffd200)",
                marginLeft: "auto",
                marginRight: "auto",
                flexDirection: "row",
              }}
            >
              {/* <Image
                source={Rupee}
                style={{
                  width: 90,
                  height: 90,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              /> */}
              <Text
                style={{
                  fontSize: 20,
                  color: "#363488",
                  // textAlign: "center",
                  letterSpacing: 1,
                  fontWeight: "bold",
                  margin: "2%",
                  textTransform: "capitalize",
                }}
              >
                Price :-
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#363488",
                  // textAlign: "center",
                  letterSpacing: 1,
                  fontWeight: "bold",

                  textTransform: "capitalize",
                }}
              >
                {(post && post.outOfStock) || (post && post.amount === 0) ? (
                  <Chip
                    icon="information"
                    style={{
                      marginTop: 16,
                      width: "35%",
                      height: "5%",
                      marginLeft: 18,
                      backgroundColor: "orange",
                      ...SHADOWS.dark,
                    }}
                  >
                    Not For Sell
                  </Chip>
                ) : (
                  <Chip
                    icon="information"
                    style={{
                      marginTop: 16,
                      width: "35%",
                      height: "5%",
                      marginLeft: 17,
                      backgroundColor: "lightblue",
                      ...SHADOWS.dark,
                    }}
                  >
                    {post.amount} ₹
                  </Chip>
                )}
              </Text>
            </View>
            {/* ///end1 */}

            {/* </View> */}

            <View style={styles.descriptionCard}>
              <View
                style={{
                  // marginTop: "4%",
                  width: "95%",
                  marginLeft: "3.5%",
                  marginRight: "auto",
                }}
              >
                <Text
                  style={{ color: "#363488", fontWeight: "bold", fontSize: 20 }}
                >
                  Description 📄
                </Text>
                <ReadMore numberOfLines={4}>
                  {post && post.description}
                </ReadMore>
                {/* <Accordion
                title={"Description"}
                bodyText={post && post.description}
              /> */}
              </View>

              {/* {post && post.amount !== 0 ? (
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
              <TouchableOpacity style={{backgroundColor:"grey"}}>
              <Text>Proceed to pay</Text>
              </TouchableOpacity>
              
            )} */}
            </View>
          </View>
          {post && post.amount !== 0 ? (
            <TouchableOpacity
              style={{ height: 100 }}
              disabled={artist && artist._id === post.artist._id ? true : false}
              onPress={() =>
                navigation.navigate("ShippingAddress", {
                  sellerId: post.artist._id,
                  itemId: post._id,
                  amount: post.amount,
                })
              }
            >
              {post && post.outOfStock ? (
                ""
              ) : (
                <View
                  style={{
                    backgroundColor:
                      artist && artist._id === post.artist._id
                        ? "#808080"
                        : "#363488",
                    width: "80%",
                    height: 50,
                    borderRadius: 5,
                    marginLeft: "10%",
                    // marginTop: "7%",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      marginTop: "auto",
                      marginBottom: "auto",
                      textAlign: "center",
                    }}
                  >
                    {artist && artist._id === post.artist._id
                      ? " Its your product"
                      : "Proceed to pay"}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          ) : (
            <View
              style={{
                backgroundColor: "#D8D8D8",
                width: "85%",
                marginBottom: "20%",
                marginLeft: "auto",
                marginRight: "auto",
                height: "5%",
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  marginBottom: "auto",
                  marginTop: "auto",
                  color: "grey",
                }}
              >
                Proceed to pay
              </Text>
            </View>
          )}
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
    fontSize: 25,
    marginTop: "6%",

    textTransform: "capitalize",
    color: "#363488",
    fontWeight: "bold",
    marginLeft: 25,
  },
  descriptionCard: {
    width: "90%",
    height: "auto",
    padding: "4%",
    // marginLeft: "5%",

    marginBottom: "8%",
    // backgroundColor: COLORS.PrimaryColor,
    // ...SHADOWS.dark,
    borderRadius: 12,
    // border: "1px solid rgba(255, 255, 255, 0.125)",
  },
});
