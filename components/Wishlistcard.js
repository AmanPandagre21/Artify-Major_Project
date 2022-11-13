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

  return data === null ? (
    <Text>Add Item</Text>
  ) : (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
        padding: "2%",
        height: "auto",
      }}
    >
      <View style={{ flexDirection: "row", width: "100%" }}>
        {/* <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            aligndatas: "center",
          }}
        > */}

        <Image
          source={{ uri: data.postId && data.postId.image.url }}
          style={{
            width: "35%",
            borderRadius: 20,
            height: 106,
          }}
        />
        {/* <View style={{marginRight:'24.5%'}}>
            
            <Text>
              {data.postId && data.postId.description}
            </Text>
            <Text>{data.postId && data.postId.amount}₹</Text>
          </View>
          <View>
            <TouchableOpacity>
              
            </TouchableOpacity>
          </View> */}

        {/* </View> */}
        <View style={{ marginRight: "auto", marginLeft: "5%" }}>
          <Text
            style={{
              color: "#363488",
              fontWeight: "bold",
            }}
          >
            {data.postId && data.postId.title}
          </Text>
          <Text style={{ fontWeight: "bold" }}>
            📄 {data.postId && data.postId.description}
          </Text>
          <Text>💰 {data.postId && data.postId.amount} ₹</Text>
        </View>

        <View
          style={{ marginLeft: "50%", marginTop: "19%", flexDirection: "row" }}
        >
          <TouchableOpacity
            style={{ marginRight: "5%" }}
            onPress={() => deleteItemHandler(data && data._id)}
          >
            <MaterialCommunityIcons
              name="delete-circle-outline"
              size={47}
              color="#363488"
            />
          </TouchableOpacity>
          <RectButton
            handlePress={() =>
              navigation.navigate("Details", {
                postId: data.postId && data.postId._id,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Wishlistcard;
