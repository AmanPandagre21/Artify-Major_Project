import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CircleVector from "../components/CircleVector";
import { Avatar } from "react-native-paper";
import AvtarImg from "../assets/images/person01.png";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants/Theme";
import { Ionicons } from "@expo/vector-icons";
import product from "../assets/images/shoes.jpg";
// import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import Accordion from "../components/Accordion";

const Details = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <CircleVector />
          <View
            style={{
              alignItems: "center",
              height: 100,
              width: "100%",
              position: "absolute",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                lineHeight: 48,
                color: "#363488",
                top: 70,
              }}
            >
              Product Details
            </Text>
          </View>
          <View style={styles.profileView}>
            <Avatar.Image
              size={30}
              source={AvtarImg}
              style={{ marginLeft: 20 }}
            />

            <Text style={styles.ProfileName}>Harish Gehlot</Text>

            <TouchableOpacity>
              <Ionicons name="call-outline" size={24} color="#363488" />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center", marginTop: "5%" }}>
            <Image source={product} style={styles.productImage} />
            <Text style={styles.productTitle}>Leather Shoes</Text>
            <Text style={{ fontSize: 20, color: "#363488" }}>800$</Text>
          </View>

          <View style={{ width: "100%", height: 40, marginTop: "2%" }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#363488",
                marginTop: "3%",
                marginLeft: "2%",
              }}
            >
              {" "}
              Product Category
            </Text>
            <Text
              style={{
                position: "absolute",
                marginLeft: "70%",
                marginTop: "3%",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {" "}
              Footwears
            </Text>
          </View>
          <View
            style={{
              marginTop: "5%",
              width: "95%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Accordion
              title={"Description"}
              bodyText={
                "Description about shoesa;lksdfja;sdlfjdskfdjfkdfkdkdfkdfjkdfjkdfkjfkdjfkfkda"
              }
            />
          </View>

          <TouchableOpacity
            style={{ height: 160 }}
            onPress={() => navigation.navigate("Checkout")}
          >
            <View
              style={{
                backgroundColor: "#363488",
                width: "80%",
                height: "40%",
                borderRadius: 15,
                marginLeft: "10%",
                marginTop: "7%",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginTop: "6%",
                  textAlign: "center",
                }}
              >
                {" "}
                Proceed to pay
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  profileView: {
    marginTop: "2%",
    flexDirection: "row",
    width: "90%",
    position: "relative",
    //marginLeft:"auto",
    marginRight: "auto",
    height: "auto",
  },
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  ProfileName: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 10,
    marginRight: "auto",
    color: "#363488",
  },
  productImage: {
    width: 340,
    height: 280,
    borderRadius: 20,
  },
  productTitle: {
    fontSize: 20,
    marginTop: "5%",
    fontStyle: "italic",
    //   fontFamily:FONTS.bold,
    color: "#363488",
    fontWeight: "bold",
  },
});
