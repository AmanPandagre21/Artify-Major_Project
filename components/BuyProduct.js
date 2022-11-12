import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ArtImage2 from "../assets/images/person02.png";
import { Divider } from "react-native-paper";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const BuyProduct = ({ order, status }) => {
  return status === "loading" ? (
    <ActivityIndicator animating={true} color={MD2Colors.red800} />
  ) : (
    <View style={styles.container}>
      {order &&
        order.map((order) => {
          return (
            <>
              <View style={styles.postHeader}>
                <Image
                  source={{ uri: order && order.orderItem.image.url }}
                  style={styles.image}
                />
                <View style={styles.headerText}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 25,
                      color: "#363488",
                    }}
                  >
                    {order && order.orderItem.title}
                  </Text>
                  <Text style={{ fontSize: 14, color: "#363488" }}>
                    {order && order.orderItem.description}{" "}
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
                  <Text
                    style={{ ...styles.productDetails, marginLeft: "auto" }}
                  >
                    {order && order.itemsPrice}
                  </Text>
                </View>

                <View style={styles.productDetails1}>
                  <Text style={styles.productDetails}>Tax Price </Text>
                  <Text
                    style={{ ...styles.productDetails, marginLeft: "auto" }}
                  >
                    {order && order.taxPrice}
                  </Text>
                </View>

                <View style={styles.productDetails1}>
                  <Text style={styles.productDetails}>Shipping Price </Text>
                  <Text
                    style={{ ...styles.productDetails, marginLeft: "auto" }}
                  >
                    {order && order.shippingPrice}
                  </Text>
                </View>

                <View style={styles.productDetails1}>
                  <Text style={styles.productDetails}>total Price </Text>
                  <Text
                    style={{ ...styles.productDetails, marginLeft: "auto" }}
                  >
                    {order && order.totalPrice}
                  </Text>
                </View>

                <View style={styles.productDetails1}>
                  <Text style={styles.productDetails}>Buyer Name </Text>
                  <Text
                    style={{ ...styles.productDetails, marginLeft: "auto" }}
                  >
                    {order && order.buyer.name}
                  </Text>
                </View>

                <View style={styles.productDetails1}>
                  <Text style={styles.productDetails}>buyer's Contact </Text>
                  <Text
                    style={{ ...styles.productDetails, marginLeft: "auto" }}
                  >
                    8319855396
                  </Text>
                </View>

                <View style={styles.productDetails1}>
                  <Text style={styles.productDetails}>Delivery Date</Text>
                  <Text
                    style={{ ...styles.productDetails, marginLeft: "auto" }}
                  >
                    23-10-2022
                  </Text>
                </View>

                <View style={styles.productDetails1}>
                  <Text style={styles.productDetails}>Delivery Status</Text>
                  <Text
                    style={{ ...styles.productDetails, marginLeft: "auto" }}
                  >
                    Not delivered
                  </Text>
                </View>
              </View>
            </>
          );
        })}
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
