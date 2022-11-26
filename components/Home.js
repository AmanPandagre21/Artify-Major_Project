import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          navigation.navigate("Registration");
        }}
      >
        <Text>Registration page</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          navigation.navigate("ChangePassword");
        }}
      >
        <Text>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }}
      >
        <Text>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          navigation.navigate("OTP");
        }}
      >
        <Text>Enter OTP</Text>
      </TouchableOpacity>

      {/* <BottomTab/> */}
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "white",
    // backgroundColor:"#F3F8FE",
    // borderBottomEndRadius:50,
    height: "100%",
  },
  links: {
    width: 200,
    height: 40,
    marginTop: 10,
    backgroundColor: "pink",
    alignItems: "center",
  },
});
