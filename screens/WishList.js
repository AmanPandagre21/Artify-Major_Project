import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList, Text, Alert } from "react-native";

import { FocusedStatusBar } from "../components/FocusedStatusBar";
import Wishlistcard from "../components/Wishlistcard";
import Wishlistheader from "../components/Wishlistheader";
import { COLORS } from "../constants/Theme";
import Loader from "../components/loader";
import { useDispatch, useSelector } from "react-redux";
import { clear_all_errors, get_items } from "../slices/whislistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();

  const { list, status: whishliststatus } = useSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    dispatch(get_items());

    if (whishliststatus.type === "error") {
      Alert.alert(whishliststatus.message);
      dispatch(clear_all_errors());
    }
  }, [dispatch]);

  return whishliststatus.type === "loading" ? (
    <Loader />
  ) : (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          {list === [] ? (
            <Text>add Item</Text>
          ) : (
            <FlatList
              data={list && list}
              renderItem={({ item }) => <Wishlistcard data={item && item} />}
              keyExtractor={(item) => item._id}
              showsVerticalScrollIndicator={false}
              // ListHeaderComponent={<Wishlistheader onSearch={} />}
            />
          )}
        </View>

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
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wishlist;
