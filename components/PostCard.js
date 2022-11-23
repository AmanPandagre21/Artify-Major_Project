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
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { get_posts, like_and_dislike } from "../slices/postSlice";
import { add_item_to_wishlist } from "../slices/whislistSlice";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

  const shareData = async (postImg) => {
    const options = {
      title: "Sharing image file from awesome share app",
      url: "https://unsplash.com/photos/1xvs_DMQxQY",
      message: "Please take a look at this post",
    };

    try {
      await Share.share(options);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (status.type === "error" && status.type !== null) {
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
        height: 430,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
        backgroundColor: "white",
        width: "92%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
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
            marginLeft: "89%",
            marginTop: "3%",
            backgroundColor: "#363488",
            alignItems: "center",
          }}
          onPress={() => addWishlistHandler(postID)}
        >
          <MaterialCommunityIcons
            name="cart-heart"
            size={26}
            color="white"
            style={{ marginTop: "auto", marginBottom: "auto" }}
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
                flexDirection: "column",
                marginTop: "12%",
                width: "75%",
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

              <View
                style={{
                  marginTop: "2%",
                  flexDirection: "row",
                  // marginTop: "12%",
                }}
              >
                <Ionicons
                  name="ios-pricetags-outline"
                  size={24}
                  color="#363488"
                />
                <Text style={{ color: "#363488" }}>{amount}💰</Text>
              </View>
            </View>
          </View>
          <View style={{ width: "40%", marginTop: "10%", marginLeft: "auto" }}>
            <TouchableOpacity
              style={{ marginTop: "2%", marginLeft: "auto", marginRight: "8%" }}
              onPress={() => shareData(postImg)}
            >
              <Ionicons
                name="ios-share-social-sharp"
                size={30}
                color="#363488"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "40%",
                height: 40,
                backgroundColor: "#363488",
                marginLeft: "auto",

                borderRadius: 18,
                marginTop: "15%",
                marginRight: "8%",
              }}
              onPress={() =>
                navigation.navigate("Details", {
                  postId: postID,
                })
              }
            >
              <Text
                style={{
                  fontSize: 15,
                  marginTop: "auto",
                  marginBottom: "auto",
                  color: "white",
                  textAlign: "center",
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
