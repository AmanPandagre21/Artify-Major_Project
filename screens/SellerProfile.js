import React, { useState } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import shoes from "../assets/images/shoes.jpg";
import pen from "../assets/images/pen.jpg";
import watch from "../assets/images/watch1.jpg";
import shirt from "../assets/images/shirt1.jpg";
import book from "../assets/images/book.jpg";
import FONTS from "../constants/theme";

const SellerProfile = () => {
  return (
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
          <Image source={Avtar} style={styles.avtar} />
          <View style={styles.profileText}>
            <Text style={{ fontWeight: "bold", fontSize: 19 }}>
              Aman Pandagre
            </Text>
            <Text style={{ fontSize: 14 }}>
              Simply a great freetimer and founder of popular show Aman ke
              parathe
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: "5%", height: "auto" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              width: 200,
              backgroundColor: "red",
              textAlign: "center",
              height: "20%",
              borderRadius: 5,
            }}
          >
            Products
          </Text>
        </View>

        <View
          style={{
            width: "90%",
            height: 120,
            backgroundColor: "#E6E6EB",
            borderRadius: 20,
            marginLeft: "7%",
            flexDirection: "row",
          }}
        >
          <Image
            source={shoes}
            style={{ width: 120, height: 120, borderRadius: 20 }}
          />
          <View>
            <Text
              style={{ marginLeft: "5%", fontSize: 20, fontWeight: "bold" }}
            >
              Leather shoes
            </Text>
            <Text style={{ width: "70%", marginLeft: "4%" }}>
              Aman earned from his show aman ke parathe
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 15, marginLeft: "5%", marginTop: "5%" }}>
                {" "}
                Price - 80K
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#363488",
                  width: "30%",
                  height: 30,
                  marginLeft: "3%",
                  borderRadius: 15,
                  marginTop: "4%",
                }}
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
        </View>

        <View
          style={{
            width: "90%",
            height: 120,
            backgroundColor: "#E6E6EB",
            borderRadius: 20,
            marginLeft: "7%",
            marginTop: "4%",
            flexDirection: "row",
          }}
        >
          <Image
            source={pen}
            style={{ width: 120, height: 120, borderRadius: 20 }}
          />
          <View>
            <Text
              style={{ marginLeft: "5%", fontSize: 20, fontWeight: "bold" }}
            >
              Pen
            </Text>
            <Text style={{ width: "70%", marginLeft: "4%" }}>
              Aman earned from his show aman ke parathe
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 15, marginLeft: "5%", marginTop: "5%" }}>
                {" "}
                Price - 10
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#363488",
                  width: "30%",
                  height: 30,
                  marginLeft: "3%",
                  borderRadius: 15,
                  marginTop: "4%",
                }}
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
        </View>

        <View
          style={{
            width: "90%",
            height: 120,
            backgroundColor: "#E6E6EB",
            borderRadius: 20,
            marginLeft: "7%",
            marginTop: "4%",
            flexDirection: "row",
          }}
        >
          <Image
            source={watch}
            style={{ width: 120, height: 120, borderRadius: 20 }}
          />
          <View>
            <Text
              style={{ marginLeft: "5%", fontSize: 20, fontWeight: "bold" }}
            >
              Diamond Watch
            </Text>
            <Text style={{ width: "70%", marginLeft: "4%" }}>
              Aman earned from his show aman ke parathe
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 15, marginLeft: "5%", marginTop: "5%" }}>
                {" "}
                Price - 10
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#363488",
                  width: "30%",
                  height: 30,
                  marginLeft: "3%",
                  borderRadius: 15,
                  marginTop: "4%",
                }}
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
        </View>

        <View
          style={{
            width: "90%",
            height: 120,
            backgroundColor: "#E6E6EB",
            borderRadius: 20,
            marginLeft: "7%",
            marginTop: "4%",
            flexDirection: "row",
          }}
        >
          <Image
            source={shirt}
            style={{ width: 120, height: 120, borderRadius: 20 }}
          />
          <View>
            <Text
              style={{ marginLeft: "5%", fontSize: 20, fontWeight: "bold" }}
            >
              Aman's Busat
            </Text>
            <Text style={{ width: "70%", marginLeft: "4%" }}>
              Aman earned from his show aman ke parathe
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 15, marginLeft: "5%", marginTop: "5%" }}>
                {" "}
                Price - 10
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#363488",
                  width: "30%",
                  height: 30,
                  marginLeft: "3%",
                  borderRadius: 15,
                  marginTop: "4%",
                }}
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
        </View>

        <View
          style={{
            width: "90%",
            height: 120,
            backgroundColor: "#E6E6EB",
            borderRadius: 20,
            marginLeft: "7%",
            marginTop: "4%",
            flexDirection: "row",
          }}
        >
          <Image
            source={book}
            style={{ width: 120, height: 120, borderRadius: 20 }}
          />
          <View>
            <Text
              style={{ marginLeft: "5%", fontSize: 20, fontWeight: "bold" }}
            >
              Aman's book
            </Text>
            <Text style={{ width: "70%", marginLeft: "4%" }}>
              Aman earned from his show aman ke parathe
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 15, marginLeft: "5%", marginTop: "5%" }}>
                {" "}
                Price - 10
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#363488",
                  width: "30%",
                  height: 30,
                  marginLeft: "3%",
                  borderRadius: 15,
                  marginTop: "4%",
                }}
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
        </View>
      </View>
    </ScrollView>
  );
};

export default SellerProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    marginBottom: "10%",
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
