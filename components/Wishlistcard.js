import { View, Image, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants/Theme";
import { RectButton } from "../components/Button";
import { WishlistTitle } from "../components/SubInfo";
import person04 from "../assets/images/person04.png";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { get_items, remove_item } from "../slices/whislistSlice";
import { useDispatch, useSelector } from "react-redux";

const Wishlistcard = ({ data }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const deleteItemHandler = async (id) => {
    await dispatch(remove_item(id));
    dispatch(get_items());
  };

  return !data ? (
    <ActivityIndicator animating={true} color={MD2Colors.red800} />
  ) : (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", padding: SIZES.font }}>
        <View>
          <Text
            style={{
              // fontFamily: FONTS.semiBold,
              // fontSize: titleSize,
              color: COLORS.primary,
            }}
          >
            {data && data.postId.title}
          </Text>
          <Text
            style={{
              // fontFamily: FONTS.regular,
              // fontSize: subTitleSize,
              color: COLORS.primary,
            }}
          >
            {/* by {subTitle} */}
          </Text>
        </View>

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            aligndatas: "center",
          }}
        >
          {/* <EthPrice price = {data.price}/> */}

          <Image
            source={{ uri: data && data.postId.image.url }}
            style={{
              width: "20%",
              borderRadius: 50,
              height: "200%",
              marginBottom: SIZES.font - 20,
              marginTop: SIZES.font - 110,
            }}
          />
          <View
            style={{
              marginTop: -7 * SIZES.large,
              // fontFamily : FONTS.bold,
              fontSize: SIZES.extraLarge,
            }}
          >
            <Text></Text>
            <Text
              style={{
                textAlign: "left",
              }}
            >
              {data && data.postId.description}
            </Text>
            <Text>{data && data.postId.amount}$</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                position: "absolute",
                marginLeft: -170,
                marginTop: -4,
              }}
              onPress={() => deleteItemHandler(data._id)}
            >
              {/* <MaterialCommunityIcons name = "delete-empty" size={35} color='#363488' /> */}
              <MaterialCommunityIcons
                name="delete-circle-outline"
                size={47}
                color="#363488"
              />
            </TouchableOpacity>
            <RectButton
              minWidth={120}
              // fontSize = {SIZES.font}
              marginLeft={-110}
              handlePress={() =>
                navigation.navigate("Details", {
                  postId: data && data.postId._id,
                })
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Wishlistcard;
