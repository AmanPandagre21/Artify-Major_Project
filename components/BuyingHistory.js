import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import ProductImage from "../assets/images/pen.jpg";
import ProductImage2 from "../assets/images/pen.jpg";
import ProductImage3 from "../assets/images/pen.jpg";
const BuyingHistory = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.postHeader}>
        {/* <View > */}
        <Image source={ProductImage} style={styles.image} />
        <View style={styles.headerText}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#363488" }}>
            Painting
          </Text>
          <Text style={{ fontSize: 14, color: "#363488" }}>
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
        </View>
        {/* // </View> */}
      </TouchableOpacity>

      <Divider style={styles.Divider} />
      <TouchableOpacity style={styles.postHeader}>
        <Image source={ProductImage2} style={styles.image} />
        <View style={styles.headerText}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#363488" }}>
            Mandala
          </Text>
          <Text style={{ fontSize: 14, color: "#363488" }}>
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
        </View>
      </TouchableOpacity>

      <Divider style={styles.Divider} />
      <TouchableOpacity style={styles.postHeader}>
        <Image source={ProductImage3} style={styles.image} />
        <View style={styles.headerText}>
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#363488" }}>
            Painting
          </Text>
          <Text style={{ fontSize: 14, color: "#363488" }}>
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
        </View>
      </TouchableOpacity>

      <Divider style={styles.Divider} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    width: "90%",
    marginLeft: "4%",
    marginRight: "4%",
  },
  postHeader: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: "4%",
  },
  headerText: {
    marginLeft: "5%",
    width: "70%",
  },
  Divider: {
    backgroundColor: "#363488",
    height: 2,
    marginBottom: 2,
  },
});
export default BuyingHistory;
