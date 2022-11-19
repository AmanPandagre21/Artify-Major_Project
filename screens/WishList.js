import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Alert,
  StyleSheet,
  Image,
  RefreshControl,
  ScrollView,
} from "react-native";
import circle from "../assets/images/circleVector_1.png";
import CircleVector from "../components/CircleVector";
import { FocusedStatusBar } from "../components/FocusedStatusBar";
import Wishlistcard from "../components/Wishlistcard";
import Wishlistheader from "../components/Wishlistheader";
import { COLORS } from "../constants/Theme";
import Loader from "../components/loader";
import { useDispatch, useSelector } from "react-redux";
import { clear_all_errors, get_items } from "../slices/whislistSlice";
import WishlistImage from "../assets/addWishList.png";
const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Wishlist = () => {
  const dispatch = useDispatch();

  const { list, status: whishliststatus } = useSelector(
    (state) => state.wishlist
  );

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(get_items());
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    if (whishliststatus.type === "error") {
      Alert.alert(whishliststatus.message);
      dispatch(clear_all_errors());
    }
    dispatch(get_items());
  }, [dispatch]);

  return whishliststatus.type === "loading" ? (
    <Loader />
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          <Image source={circle} style={{ width: 200, height: 150 }} />
          <View
            style={{
              alignItems: "center",
              height: 170,
              width: "100%",
              position: "absolute",
              flexDirection: "row",
              alignContent: "center",
            }}
          >
            <Text
              style={{
                color: "#363488",
                fontWeight: "bold",
                fontSize: 30,
                marginLeft: "35%",
              }}
            >
              Wishlist
            </Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {/* <View
              style={{
                zIndex: 0,
              }}
            > */}
            {list === [] ? (
              <Image
                source={WishlistImage}
                style={{ width: 200, height: 100 }}
              />
            ) : (
              <FlatList
                data={list && list}
                renderItem={({ item }) => <Wishlistcard data={item && item} />}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}

                // ListHeaderComponent={<Wishlistheader onSearch={} />}
              />
            )}
            {/* </View> */}

            <View
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: -1,
              }}
            >
              <View style={{ height: 300, backgroundColor: "white" }} />
              <View style={{ flex: 1, backgroundColor: "white" }} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wishlist;
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
});
