import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import circle from "../assets/images/circleVector_1.png";
import { COLORS, NFTData, SHADOWS, SIZES } from "../constants/Theme";
import { SearchComponent } from "../components/Index";
import shoes from "../assets/images/shoes.jpg";
import pen from "../assets/images/pen.jpg";
import eth from "../assets/icon/eth.png";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import shirt from "../assets/images/shirt1.jpg";
import watch from "../assets/images/watch1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { loggedArtist } from "../slices/user-artist-Slice/artistSlice";
import { Button } from "react-native-paper";
import { get_posts, like_and_dislike } from "../slices/postSlice";
import {
  add_item_to_wishlist,
  clear_all_errors,
} from "../slices/whislistSlice";
import PostCard from "../components/PostCard";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const { artist } = useSelector((state) => state.artist);

  const { list, status } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(loggedArtist());
    dispatch(get_posts());
  }, [dispatch]);

  useEffect(() => {
    if (status.type === "error") {
      Alert.alert(status.message);
      dispatch(clear_all_errors());
    }
    if (status.type === "idle") {
      Alert.alert(status.message);
    }
  }, [status.type, status.message, Alert, dispatch]);

  return status.type === "loading" ? (
    <Text>LOADING</Text>
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* <FocusedStatusBar backgroundColor={COLORS.primary} /> */}
        <View style={styles.container}>
          <Image source={circle} style={{ width: 200, height: 150 }} />
          <View
            style={{
              alignItems: "center",
              height: 170,
              width: "100%",
              position: "absolute",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 30, marginLeft: "3%" }}>
              {artist && artist.name}
            </Text>
            <View style={{ width: "95%", marginRight: 30 }}>
              <SearchComponent />
            </View>
          </View>

          {/* Card starts from here */}

          <View style={{ marginTop: "15%" }}>
            {posts &&
              posts.map((ele) => {
                return (
                  <PostCard
                    key={ele._id}
                    postID={ele._id}
                    postImg={ele.image.url}
                    title={ele.title}
                    description={ele.discription}
                    likes={ele.likes}
                    artistName={ele.artist.name}
                    artistId={ele.artist._id}
                    amount={ele.amount}
                  />
                );
              })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
});
