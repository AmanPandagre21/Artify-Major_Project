import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { Button, Divider } from "react-native-paper";
import { COLORS, NFTData, SHADOWS, SIZES } from "../constants/Theme";
import Loader from "./loader";
import { useDispatch, useSelector } from "react-redux";
import { clear_all_errors, update_order } from "../slices/orderSlice";

const BuyProduct = ({ order, userId }) => {
  const dispatch = useDispatch();

  const { status: orderStat } = useSelector((state) => state.order);

  const updateOrderHandler = async (orderId) => {
    await dispatch(update_order(orderId));
  };

  useEffect(() => {
    if (orderStat.type === "error") {
      Alert.alert(orderStat.message);
      dispatch(clear_all_errors());
    }
  }, [dispatch]);

  return orderStat.type === "loading" ? (
    <Loader />
  ) : (
    <>
      {order &&
        order.map((order) => {
          return (
            <>
              <View style={styles.container} key={order._id}>
                <View style={styles.postHeader}>
                  {order.orderItem === null ? (
                    <Image source={"Goku"} style={styles.image} />
                  ) : (
                    <Image
                      source={{
                        uri: order.orderItem.image.url,
                      }}
                      style={styles.image}
                    />
                  )}

                  <View style={styles.headerText}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 25,
                        color: COLORS.White,
                      }}
                    >
                      {order.orderItem === null
                        ? "Post deleted"
                        : order.orderItem.title}
                    </Text>
                    <Text style={{ fontSize: 14, color: COLORS.White }}>
                      {order.orderItem === null
                        ? "Post Deleted"
                        : order.orderItem.description}
                    </Text>
                  </View>
                </View>
                <Divider style={{ backgroundColor: COLORS.White, height: 2 }} />
                <View style={styles.orderDetails}>
                  <Text
                    style={{
                      width: "100%",
                      height: "14%",
                      backgroundColor: COLORS.White,
                      borderRadius: 10,
                      fontWeight: "bold",
                      color: COLORS.PrimaryColor,
                      fontSize: 24,
                      textAlign: "center",
                      marginTop: "2%",
                      marginBottom: "2%",
                      ...SHADOWS.dark,
                    }}
                  >
                    Details
                  </Text>

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
                      {order && order.buyer.phone}
                    </Text>
                  </View>

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
                    <Text style={styles.productDetails}>Delivery Status</Text>
                    <Text
                      style={{ ...styles.productDetails, marginLeft: "auto" }}
                    >
                      {order && order.orderStatus}
                    </Text>
                  </View>
                  {order.seller._id !== userId ? (
                    <Button
                      style={{
                        width: "80%",
                        height: "14%",
                        borderRadius: 15,
                        backgroundColor: COLORS.White,
                        marginTop: "5%",
                        marginBottom: "2%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                      onPress={() => updateOrderHandler(order._id)}
                    >
                      <Text
                        style={{
                          color: COLORS.PrimaryColor,
                          fontWeight: "bold",
                          marginTop: "2%",
                          textAlign: "center",
                          fontSize: 20,
                        }}
                      >
                        Delivered
                      </Text>
                    </Button>
                  ) : null}
                </View>
              </View>
            </>
          );
        })}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "3%",
    marginBottom: "5%",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    height: "auto",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: "4%",
    paddingBottom: "6%",
    backgroundColor: COLORS.PrimaryColor,
    ...SHADOWS.dark,
  },
  postHeader: {
    flexDirection: "row",
    marginBottom: 10,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: "4%",
    border: 4,
    borderStyle: "solid",
    borderColor: COLORS.White,
  },
  headerText: {
    marginLeft: "5%",
    width: "70%",
  },
  orderDetails: {
    width: "90%",
    marginTop: "3%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  productDetails: {
    fontWeight: "bold",
    color: COLORS.Gray,
    fontSize: 15,
  },
  productDetails1: {
    flexDirection: "row",
  },
});
export default BuyProduct;
