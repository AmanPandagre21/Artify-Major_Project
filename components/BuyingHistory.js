import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import Tick from "../assets/images/tick.png";
import Loader from "./loader";
import { SHADOWS } from "../constants/Theme";

const BuyingHistory = ({ history, status }) => {
  return status === "loading" ? (
    <Loader />
  ) : (
    <>
      {history &&
        history.map((history) => {
          return (
            <View style={styles.container} key={history._id}>
              <View style={styles.postHeader}>
                <Image
                  source={{ uri: history && history.orderItem.image.url }}
                  style={styles.image}
                />

                <View style={styles.headerText}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "#363488",
                    }}
                  >
                    {history && history.orderItem.title}
                  </Text>
                  <Text style={{ fontSize: 14, color: "#363488" }}>
                    {history && history.orderItem.description}
                  </Text>

                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 20,
                      color: "#363488",
                      marginTop: 4,
                    }}
                  >
                    {history && history.totalPrice}
                  </Text>
                </View>
                <Image
                  source={Tick}
                  style={{ width: 80, height: 80, marginRight: "4%" }}
                />
                {/* // </View> */}
              </View>

              <Divider style={styles.Divider} />
            </View>
          );
        })}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    width: "90%",
    marginLeft: "4%",
    marginRight: "4%",
    ...SHADOWS.dark,
  },
  postHeader: {
    width: "80%",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginLeft: "4%",
  },
  headerText: {
    marginLeft: "5%",
    width: "65%",
  },
  Divider: {
    backgroundColor: "#363488",
    height: 2,
    marginBottom: 2,
  },
});
export default BuyingHistory;
