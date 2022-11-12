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
// import { SearchComponent } from "../components/Index";

import { useDispatch, useSelector } from "react-redux";
import { loggedArtist } from "../slices/user-artist-Slice/artistSlice";
import { get_posts } from "../slices/postSlice";
import { clear_all_errors } from "../slices/whislistSlice";
import PostCard from "../components/PostCard";
import Loader from "../components/loader";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { posts, status: postStatus } = useSelector((state) => state.posts);

  const { artist } = useSelector((state) => state.artist);

  const { list, status: whishliststatus } = useSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    if (whishliststatus.type === "error") {
      Alert.alert(whishliststatus.message);
      dispatch(clear_all_errors());
    }
    dispatch(loggedArtist());

    dispatch(get_posts());
  }, [Alert, dispatch, whishliststatus]);

  return !posts ? (
    <Loader/>
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
              alignContent:"center"
            }}
          >
            <Text style={{ fontSize: 30 ,marginLeft:"19%",color:"#363488",fontWeight:"500"}}>
             Artify
            </Text>
           
            {/* <View style={{ width: "95%", marginRight: 30 }}>
              <SearchComponent />
            </View> */}
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
