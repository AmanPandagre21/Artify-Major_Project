import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { COLORS, assets } from "../constants/Index";
import { TextInput, Button } from "react-native-paper";

const AuthLayout = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={assets.circleVector_1}
        resizeMode="contain"
        style={styles.vector_img}
      ></Image>

      <View style={{ flex: 1 }}>
        <Image
          source={assets.LoginVector}
          resizeMode="contain"
          style={styles.start_img}
        ></Image>

        <Text style={styles.welcomeText}>WELCOME BACK</Text>
      </View>
      {props.childern}
    </SafeAreaView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.Black,
    position: "relative",
  },
  vector_img: {
    width: "60%",
    height: "30%",
    top: -10,
  },
  start_img: {
    width: "84%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-58%",
  },
  welcomeText: {
    marginTop: "-25%",
    color: COLORS.PrimaryColor,
    fontSize: 30,
    textAlign: "center",
  },
});
