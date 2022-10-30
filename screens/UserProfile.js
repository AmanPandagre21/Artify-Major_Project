import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "react-native-paper";
import HeaderText from "../components/HeaderText";
import CircleVector from "../components/CircleVector";
import Avtar from "../assets/avtar.jpg";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Post from "../components/Posts";
import BuyProduct from "../components/BuyProduct";
import BuyingHistory from "../components/BuyingHistory";
import { useSelector, useDispatch } from "react-redux";

const UserProfile = ({ navigation }) => {
  const [showpost, setshowpost] = useState(true);
  const [currBuyProduct, setCurrBuyProduct] = useState(false);
  const [buyingHistory, setBuyingHistory] = useState(false);

  const { artist } = useSelector((state) => state.artist);

  return (
    <ScrollView style={styles.container}>
      <View>
        <CircleVector />
        <HeaderText content="Profile" />
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: artist && artist.avatar.url }}
            style={styles.avtar}
          />

          <View style={styles.profileText}>
            <Text style={{ fontWeight: "bold", fontSize: 19 }}>
              {artist && artist.name}
            </Text>
            <Text style={{ fontSize: 14 }}>{artist && artist.bio}</Text>
          </View>
        </View>
        <View style={{ marginLeft: "8%", marginTop: "2%" }}>
          <Button
            mode="contained"
            buttonColor="#363488"
            textColor="white"
            labelStyle={{
              fontSize: 14,
              textTransform: "uppercase",
              //   letterSpacing: 1,
              textAlign: "center",
            }}
            style={{ ...styles.btn }}
            onPress={() => navigation.navigate("EditProfile")}
          >
            {" "}
            Edit Profile
          </Button>

          <Button
            mode="contained"
            buttonColor="#363488"
            textColor="white"
            position="absolute"
            labelStyle={{
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: 1,
              textAlign: "center",
            }}
            style={{ ...styles.btn, marginLeft: "45%" }}
            onPress={() => navigation.navigate("ContactForm")}
          >
            {" "}
            Contact Us
          </Button>
        </View>

        <View style={styles.posts}>
          <TouchableOpacity
            onPress={() => {
              setshowpost(true);
              setCurrBuyProduct(false);
              setBuyingHistory(false);
            }}
          >
            <Ionicons
              name="apps"
              size={40}
              color="black"
              style={styles.postIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setshowpost(false);
              setCurrBuyProduct(true);
              setBuyingHistory(false);
            }}
          >
            <FontAwesome5
              name="shopping-bag"
              size={40}
              color="black"
              style={styles.postIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setshowpost(false);
              setCurrBuyProduct(false);
              setBuyingHistory(true);
            }}
          >
            <Ionicons
              name="ios-checkmark-circle-sharp"
              size={40}
              color="black"
              style={styles.postIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setshowpost(false);
              setCurrBuyProduct(false);
              setBuyingHistory(false);
            }}
          >
            <MaterialCommunityIcons
              name="play-box"
              size={40}
              color="black"
              style={styles.postIcon}
            />
          </TouchableOpacity>
        </View>
        {/* <BuyProduct/>
      <BuyingHistory/> */}

        {showpost ? (
          <Post />
        ) : currBuyProduct ? (
          <BuyProduct />
        ) : buyingHistory ? (
          <BuyingHistory />
        ) : (
          <Text>hello</Text>
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  profileInfo: {
    width: "85%",
    height: 114,
    backgroundColor: "#E6E6EB",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "16%",
    borderRadius: 25,
  },

  avtar: {
    width: 110,
    height: 115,
    borderRadius: 30,
    marginTop: "-12%",
  },
  profileText: {
    position: "absolute",
    marginLeft: "35%",
    marginTop: "3%",
  },
  btn: {
    height: 50,
    width: "40%",
    marginTop: 10,
    borderRadius: 8,
  },
  posts: {
    flexDirection: "row",
    marginTop: "9%",
    marginLeft: "9%",
  },
  postIcon: {
    marginLeft: "15%",
    color: "#363488",
  },
});
export default UserProfile;
