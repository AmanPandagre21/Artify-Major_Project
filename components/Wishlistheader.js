import React from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { SIZES } from "../constants/Theme";

import CircleVector from "../components/CircleVector";

const Wishlistheader = (onSearch) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <CircleVector />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <Text
            // resizeMode="contain"
            style={{
              marginTop: 70,
              width: "100%",
              height: "auto",
              fontSize: SIZES.extraLarge,
              // fontFamily:FONTS.regular,
              textAlign: "center",
              color: "#363488",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Wishlist
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wishlistheader;
