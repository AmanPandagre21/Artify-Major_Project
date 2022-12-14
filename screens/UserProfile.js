import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Text, Button } from "react-native-paper";
import HeaderText from "../components/HeaderText";
import CircleVector from "../components/CircleVector";
import AvtarImg from "../assets/images/_avatar_.png";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Post from "../components/Posts";
import BuyProduct from "../components/BuyProduct";
import BuyingHistory from "../components/BuyingHistory";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { my_posts } from "../slices/user-artist-Slice/artistSlice";
import { get_my_orders, get_my_orders_history } from "../slices/orderSlice";
import Loader from "../components/loader";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const UserProfile = ({ navigation }) => {
  const [showpost, setshowpost] = useState(true);
  const [currBuyProduct, setCurrBuyProduct] = useState(false);
  const [buyingHistory, setBuyingHistory] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const dispatch = useDispatch();

  const { artist, myPosts, status } = useSelector((state) => state.artist);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(my_posts());

    dispatch(get_my_orders());

    dispatch(get_my_orders_history());
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const {
    orders,
    ordersHistory,
    status: orderStatus,
  } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(my_posts());

    dispatch(get_my_orders());

    dispatch(get_my_orders_history());
  }, [artist, dispatch]);

  return status.type === "loading" ? (
    <Loader />
  ) : (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View>
        <CircleVector />
        <TouchableOpacity
          style={{ position: "absolute", marginLeft: "85%", marginTop: "15%" }}
          onPress={() => navigation.navigate("SettingPage")}
        >
          <Ionicons name="settings" size={45} color="#363488" />
        </TouchableOpacity>

        <HeaderText content="Profile" />

        <View style={styles.profileInfo}>
          {artist.avatar ? (
            <Image
              source={{
                uri: artist && artist.avatar.url,
              }}
              style={styles.avtar}
            />
          ) : (
            <Image source={AvtarImg} style={styles.avtar} />
          )}

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
        </View>

        {showpost ? (
          <Post post={myPosts} status={status} />
        ) : currBuyProduct ? (
          <BuyProduct
            order={orders && orders}
            userId={artist._id}
            status={orderStatus}
          />
        ) : buyingHistory ? (
          <BuyingHistory history={ordersHistory} status={orderStatus} />
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
    marginLeft: "23%",
    color: "#363488",
  },
});
export default UserProfile;
