import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants/Theme";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#363488",
        width: "59%",
        height: 40,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          // fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: "white",
          textAlign: "center",
        }}
      >
        View
      </Text>
    </TouchableOpacity>
  );
};
