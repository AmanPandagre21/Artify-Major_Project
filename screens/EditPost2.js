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
import goku from "../assets/images/goku.jpg";
import CircleVector from "../components/CircleVector";
import { Avatar, Divider } from "react-native-paper";
import { ActivityIndicator, MD2Colors, Switch } from "react-native-paper";
import Rupee from "../assets/images/rupee.png";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants/Theme";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import ArtWork from "../assets/images/artwork.png";
// import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import Accordion from "../components/Accordion";
import { useDispatch, useSelector } from "react-redux";
import {
  clear_all_errors,
  delete_post,
  get_post_details,
} from "../slices/postSlice";
import Loader from "../components/loader";
import ReadMore from "react-native-read-more-text";
const EditPost2 = ({ route, navigation }) => {
  const [isPriceOn, setIsPriceOn] = useState(false);

  const dispatch = useDispatch();

  const { post, status: post_Status } = useSelector((state) => state.posts);

  const onDeletehandler = async () => {
    await dispatch(delete_post(route.params.postId));

    if (post_Status && post_Status.type === "idle") {
      Alert.alert(post_Status.message);
    }

    navigation.navigate("UserProfile");
  };

  useEffect(() => {
    if (route.params.postId) {
      dispatch(get_post_details(route.params.postId));
    }

    if (post_Status && post_Status.type === "error") {
      Alert.alert(post_Status.message);
      dispatch(clear_all_errors());
    }
  }, [route, dispatch]);

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

          <Image
            source={{ uri: post && post.image.url }}
            style={styles.imagestyle}
          />
          <View
            style={{
              flexDirection: "row",
              color: "#363488",
              marginTop: "8%",
            }}
          >
            <View
              style={{
                width: "40%",
                marginLeft: "5%",
                height: 50,
                backgroundColor: "#363488",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  textAlign: "center",
                  marginTop: "10%",
                }}
              >
                ⭐ {post && post.title}
              </Text>
            </View>
            <View
              style={{
                width: "40%",
                marginLeft: "10%",
                height: 50,
                backgroundColor: "#363488",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  textAlign: "center",
                  marginTop: "10%",
                }}
              >
                {post && post.amount} 💰
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
              <ReadMore numberOfLines={4}>{post && post.description}</ReadMore>
              {/* <Accordion
                title={"Description"}
                bodyText={post && post.description}
              /> */}
            </View>
            {/* <Accordion
              title={"Description"}
              bodyText={post && post.description}
            /> */}
          </View>
          <TouchableOpacity
            style={{
              // backgroundColor:'red',
              height: "auto",
              justifyContent: "center",
              flexDirection: "row",
            }}
            onPress={() =>
              navigation.navigate("EditPost", {
                postId: route.params.postId,
                image: post.image.url,
                title: post.title,
                description: post.description,
                sell: post.isForSell,
              })
            }
          >
            <AntDesign
              name="edit"
              size={35}
              color="#363488"
              style={{ marginTop: "4%" }}
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
              marginBottom: "7%",
            }}
            onPress={onDeletehandler}
          >
            <AntDesign
              name="delete"
              size={35}
              color="#363488"
              style={{ marginTop: "4%", marginRight: "3%" }}
            />
            <Text
              style={{
                // fontFamily:FONTS.bold,
                marginTop: "5%",
                fontSize: 18,
                marginRight: "38%",
              }}
            >
              Delete post
            </Text>
            <AntDesign
              name="right"
              size={35}
              color="#363488"
              style={{ marginTop: "3%", marginLeft: "9%" }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditPost2;

const styles = StyleSheet.create({
  imagestyle: {
    width: "90%",
    height: 300,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    marginTop: "2%",
  },
});
