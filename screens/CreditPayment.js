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
import { TextInput, Button } from "react-native-paper";
import CircleVector from "../components/CircleVector";

// import Profile from '../components/Profile';
// import { FocusedStatusBar } from '../components';
// import COLORS from '../constants';

const CreditPayment = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CircleVector />
        <View
          style={{
            alignItems: "center",
            height: 100,
            width: "100%",
            position: "absolute",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              lineHeight: 48,
              color: "#363488",
              top: 70,
            }}
          >
            Checkout
          </Text>
        </View>

        <View style={styles.footer}>
          <TextInput
            label="First Name"
            name="name"
            placeholder="Harish Gehlot"
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <TextInput
            label="Account Number"
            name="acno"
            placeholder="19104*******"
            keyboardType="numeric"
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <TextInput
            label="CVV"
            name="cvv"
            placeholder="_ _ _"
            keyboardType="numeric"
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <TextInput
            label="Valid Until"
            name="cvv"
            placeholder="mm/yyyy"
            keyboardType="numeric"
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <View
            style={{
              width: "100%",
              height: 100,
              marginLeft: "13%",
              marginBottom: "10%",
            }}
          >
            <Button
              mode="contained"
              buttonColor="#363488"
              textColor="white"
              labelStyle={{
                fontSize: 16,
                textTransform: "uppercase",
                letterSpacing: 1,
                textAlign: "center",
              }}
              style={styles.btn}
            >
              Pay
            </Button>
          </View>
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
    fontSize: 25,
    lineHeight: 48,
    color: "#363488",
    // left: 49,
    top: 70,
  },
  profileView: {
    marginTop: 10,
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
    marginTop: "5%",
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 5,
    paddingTop: 25,
    flex: 1,
    top: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginInput: {
    margin: "6%",
    height: 65,
    width: "88%",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
  },
  btn: {
    height: 50,
    width: "88%",
    marginTop: 10,
    borderRadius: 8,
  },
});
export default CreditPayment;
