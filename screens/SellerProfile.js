import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "react-native-paper";
import CircleVector from "../components/CircleVector";
import Avtar from "../assets/images/avtar.jpg";
import Loader from "../components/loader";
import { useDispatch, useSelector } from "react-redux";
import {
  artist_posts,
  artist_profile,
} from "../slices/user-artist-Slice/artistSlice";

const SellerProfile = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const {
    artistProfile,
    myPosts,
    artist,
    status: artistStatus,
  } = useSelector((state) => state.artist);

  useEffect(() => {
    dispatch(artist_profile(route.params.artId));

    dispatch(artist_posts(route.params.artId));

    if (route.params.artId === artist._id) {
      navigation.navigate("UserProfile");
    }
  }, [route, dispatch]);

  return artistStatus.type === "loading" ? (
    <Loader />
  ) : (
    <ScrollView>
      <View style={styles.container}>
        <CircleVector />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            lineHeight: 48,
            color: "#363488",
            position: "absolute",
            marginLeft: "35%",
            marginTop: "16%",
          }}
        >
          Profile
        </Text>
        {/* <View style = {{ alignItems: 'center', height:100, width:"100%",position:'absolute'}}>
      </View> */}
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: artistProfile && artistProfile.avatar.url }}
            style={styles.avtar}
          />
          <View style={styles.profileText}>
            <Text style={{ fontWeight: "bold", fontSize: 19 }}>
              {artistProfile && artistProfile.name}
            </Text>
            <Text style={{ fontSize: 14 }}>
              {artistProfile && artistProfile.bio}
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            marginTop: "5%",
            height: "4%",
            width:'50%',
            backgroundColor: "#363488",
            borderRadius:13,
            marginLeft:'25%'
            // marginBottom: "-5%",
            // borderRadius:10
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color:'white',
              textAlign: "center",
              height: 60,
              marginTop:'2%'
              }}
          >
            Products
          </Text>
        </View>

        {myPosts &&
          myPosts.map((post) => {
            return (
              <View
                style={{
                  width: "90%",
                  height: 'auto',
                  backgroundColor: "#E6E6EB",
                  borderRadius: 20,
                  marginLeft: "7%",
                  marginTop: "4%",
                  flexDirection: "row",
                }}
              >
                <Image
                  source={{ uri: post.image.url }}
                  style={{ width: 120, height: 'auto', borderRadius: 20 }}
                />
                <View>
                  <Text
                    style={{
                      marginLeft: "5%",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {post.title}
                  </Text>
                  <Text style={{ width: "70%", marginLeft: "4%" }}>
                    {post.description}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontSize: 15,
                        marginLeft: "5%",
                        marginTop: "5%",
                      }}
                    >
                      💰  {post.amount}
                    </Text>
                    
                  </View>
                  <TouchableOpacity
                      style={{
                        backgroundColor: "#363488",
                        width: "50%",
                        height: 30,
                        marginLeft: "50%",
                        borderRadius: 15,
                        marginTop: "4%",
                        marginBottom:'3%'
                      }}
                      onPress={() =>
                        navigation.navigate("Details", {
                          postId: post._id,
                        })
                      }
                    >
                      <Text
                        style={{
                          color: "white",
                          textAlign: "center",
                          marginTop: "4%",
                        }}
                      >
                        View
                      </Text>
                    </TouchableOpacity>
                </View>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default SellerProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    marginBottom: "60%",
  },
  profileInfo: {
    width: "85%",
    height: 114,
    backgroundColor: "#E6E6EB",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
    borderRadius: 25,
  },
  profileText: {
    position: "absolute",
    marginLeft: "40%",
    marginTop: "3%",
  },
  profileButton: {
    width: "90%",
    height: 40,
    marginLeft: "8%",
    marginTop: "4%",
    backgroundColor: "#363488",
    borderRadius: 10,
  },
  avtar: {
    width: 110,
    height: 115,
    borderRadius: 30,
    marginTop: "-12%",
  },
});
