import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import graphic from "../assets/circleVector_1.png";
import { TextInput, Button } from "react-native-paper";
import Profile from "./Profile";

const ForgotPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 0 }}>
        <Image
          source={graphic}
          style={{ width: 200, height: 150, margin: 0 }}
        />

        <View
          style={{
            alignItems: "center",
            height: 100,
            margin: 0,
            padding: 0,
            width: "100%",
            position: "absolute",
          }}
        >
          <Text style={styles.headerText}>Forgot Password</Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <Profile />
        </View>

        <View style={styles.footer}>
          <TextInput
            label="Enter your mail id"
            name="mailId"
            // value={email}
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />

          <Button
            mode="contained"
            buttonColor="#363488"
            textColor="white"
            labelStyle={{
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: 1,
              textAlign: "center",
              top: 10,
            }}
            style={styles.btn}
          >
            Next
          </Button>

          <View style={{ marginTop: 20, height: 70 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F3F8FE",
    padding: 0,
  },
  headerText: {
    // fontFamily: 'Poppins',
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 48,
    color: "#363488",
    // left: 49,
    top: 100,
  },
  profileView: {
    marginTop: 50,
    flexDirection: "row",
    width: "90%",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    height: "auto",
  },
  ProfileName: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 20,
    marginRight: "auto",
    color: "#363488",
  },

  footer: {
    width: "100%",
    height: "auto",
    marginTop: 10,
    backgroundColor: "white",
    // borderTopEndRadius: 30,
    // borderTopStartRadius: 30,
    borderRadius: 30,
    padding: 5,
    paddingTop: 25,
    flex: 1,
    top: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginInput: {
    margin: "5%",
    height: 65,
    width: "88%",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
  },
  btn: {
    height: 60,
    width: "88%",
    marginTop: 10,
    borderRadius: 8,
  },
});
export default ForgotPassword;
