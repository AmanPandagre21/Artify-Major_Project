import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ArtImage2 from "../assets/images/person02.png";
import { Divider } from "react-native-paper";
const BuyProduct = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Image source={ArtImage2} style={styles.image} />
        <View style={styles.headerText}>
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "#363488" }}>
            Painting
          </Text>
          <Text style={{ fontSize: 14, color: "#363488" }}>
            Lorem Ipsum is simply dummy text of the printing.
          </Text>
        </View>
      </View>
      <Divider style={{ backgroundColor: "#363488", height: 2 }} />
      <View style={styles.orderDetails}>
        <Text
          style={{
            fontWeight: "bold",
            color: "#363488",
            fontSize: 24,
            textAlign: "center",
          }}
        >
          Details
        </Text>

        <View style={styles.productDetails1}>
          <Text style={styles.productDetails}>Product Price </Text>
          <Text style={{ ...styles.productDetails, marginLeft: "auto" }}>
            $10
          </Text>
        </View>

        <View style={styles.productDetails1}>
          <Text style={styles.productDetails}>Seller's Name </Text>
          <Text style={{ ...styles.productDetails, marginLeft: "auto" }}>
            Harish Gehlot
          </Text>
        </View>

        <View style={styles.productDetails1}>
          <Text style={styles.productDetails}>Seller's Contact </Text>
          <Text style={{ ...styles.productDetails, marginLeft: "auto" }}>
            8319855396
          </Text>
        </View>

        <View style={styles.productDetails1}>
          <Text style={styles.productDetails}>Delivery Date</Text>
          <Text style={{ ...styles.productDetails, marginLeft: "auto" }}>
            23-10-2022
          </Text>
        </View>

        <View style={styles.productDetails1}>
          <Text style={styles.productDetails}>Delivery Status</Text>
          <Text style={{ ...styles.productDetails, marginLeft: "auto" }}>
            Not delivered
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "5%",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  postHeader: {
    flexDirection: "row",
    marginBottom: 10,
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
  orderDetails: {
    width: "90%",
    marginTop: "3%",
    // marginLeft:"10%",
    // marginRight:"10%"
  },
  productDetails: {
    fontWeight: "bold",
    color: "#363488",
    fontSize: 15,
  },
  productDetails1: {
    flexDirection: "row",
  },
});
export default BuyProduct;
