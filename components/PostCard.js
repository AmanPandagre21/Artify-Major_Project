import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Share,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLORS, NFTData, SHADOWS, SIZES } from "../constants/Theme";
import eth from "../assets/icon/eth.png";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { get_posts, like_and_dislike } from "../slices/postSlice";
import { add_item_to_wishlist } from "../slices/whislistSlice";
import { useNavigation, useRoute } from "@react-navigation/native";

const PostCard = ({
  postID,
  postImg,
  title,
  description,
  likes = [],
  artistName,
  artistId,
  amount,
}) => {
  const [liked, setLiked] = useState(false);
  const [likesUser, setLikesUser] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const route = useRoute();

  const { artist } = useSelector((state) => state.artist);

  const { status } = useSelector((state) => state.wishlist);

  const addWishlistHandler = (post_id) => {
    dispatch(add_item_to_wishlist(post_id));
  };

  const likeDislikeHandler = async (userId) => {
    setLiked(!liked);
    await dispatch(like_and_dislike(userId));

    dispatch(get_posts());
  };

  const shareData = async () => {
    try {
      await Share.share({
        title: "Sharing image file from awesome share app",
        message: "Please take a look at this post",
        url: route.name,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (status.type === "error") {
      Alert.alert(status.message);
    }
    if (status.type === "idle") {
      Alert.alert(status.message);
    }
  }, [status.type, Alert, dispatch]);

  useEffect(() => {
    likes.forEach((item) => {
      if (artist) {
        const tkn = artist && artist._id;
        if (item._id === tkn) {
          setLiked(true);
        }
      }
    });
  }, [likes]);

  return (
    <View
      style={{
        height: 380,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={{ uri: postImg }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <TouchableOpacity
          style={{
            width: 5,
            height: 35,
            backgroundColor: COLORS.white,
            position: "absolute",
            borderRadius: 24,
            marginLeft: "85%",
            marginTop: "2%",
          }}
          onPress={() => addWishlistHandler(postID)}
        >
          <Image
            source={eth}
            resizeMode="contain"
            style={{
              width: 24,
              height: 24,
              marginTop: "17%",
              marginLeft: "23%",
            }}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text
              style={{
                marginLeft: "15%",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                marginLeft: "15%",
                marginTop: "2%",
                fontSize: 15,
              }}
            >
              {artistName}
            </Text>
            <View
              style={{
                marginLeft: "15%",
                flexDirection: "row",
                marginTop: "12%",
              }}
            >
              <TouchableOpacity onPress={() => likeDislikeHandler(postID)}>
                <AntDesign
                  name={liked ? "heart" : "hearto"}
                  size={24}
                  color={liked ? "red" : "blac"}
                />
              </TouchableOpacity>
              <Text>{likes.length}</Text>
            </View>
            <View
              style={{
                marginLeft: "15%",
                flexDirection: "row",
                marginTop: "12%",
              }}
            >
              <Ionicons
                name="ios-pricetags-outline"
                size={24}
                color="#363488"
              />
              <Text style={{ marginLeft: "9%", color: "#363488" }}>
                {amount}💰
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{ marginTop: "2%", marginLeft: "60%" }}
              onPress={shareData}
            >
              <Ionicons
                name="ios-share-social-sharp"
                size={30}
                color="#363488"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "30%",
                height: 40,
                backgroundColor: "black",
                marginLeft: "50%",
                borderRadius: 20,
                marginTop: "8%",
              }}
              onPress={() =>
                navigation.navigate("Details", {
                  postId: postID,
                })
              }
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  textAlign: "center",
                  marginTop: "5%",
                }}
              >
                View
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
