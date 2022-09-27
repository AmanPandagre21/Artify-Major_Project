import { StyleSheet, SafeAreaView, View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, assets, SHADOWS } from "../constants/Index";
import { Button } from "react-native-paper";

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={assets.circleVector_3} style={styles.vector_img}></Image>
      <View>
        <Image
          source={assets.Start_Vector}
          resizeMode="contain"
          style={styles.start_img}
        ></Image>
      </View>
      <View>
        <Text style={styles.app_name}>Artify</Text>
        <Text style={styles.small_discription}>
          Lorem Ispeum jba anaobnfaf najabv ihoboifbuB Obob Lorem Ispeum jba
          anaobnfaf
        </Text>
        <Button
          mode="contained"
          buttonColor="white"
          textColor="#363488"
          labelStyle={{
            fontSize: 18,
            textTransform: "uppercase",
          }}
          style={{
            marginTop: "10%",
            width: "87%",
            height: "16.5%",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          Lets Go
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.PrimaryColor,
  },
  vector_img: {
    width: "80%",
    height: "28%",
    margin: 0,
  },
  start_img: {
    width: "84%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-22%",
  },
  app_name: {
    fontSize: SIZES.variable,
    textAlign: "center",
    color: COLORS.White,
    textTransform: "uppercase",
    letterSpacing: 2,
    marginTop: "-6%",
  },
  small_discription: {
    fontSize: SIZES.medium,
    color: COLORS.White,
    textAlign: "center",
    marginLeft: 18,
    marginRight: 18,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default StartScreen;
