import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import CircleVector from "../components/CircleVector";

// import Profile from '../components/Profile';
// import { FocusedStatusBar } from '../components';
// import COLORS from '../constants';

const ShippingAddress = ({ route, navigation }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");

  const { sellerId, itemId, amount } = route.params;

  let shippingCharges = 0;
  if (amount !== 0) {
    shippingCharges = amount > 500 ? 0 : 100;
  }
  const tax = Math.floor(amount * 0.1);

  const totalAmount = amount + shippingCharges + tax;

  const shipping = {
    seller: sellerId,
    orderItem: itemId,
    itemsPrice: amount,
    taxPrice: tax,
    shippingPrice: shippingCharges,
    totalPrice: totalAmount,
    shippingInfo: {
      address,
      city,
      state,
      pinCode,
    },
  };

  const addressHandler = () => {
    if (!address || !city || !state || !pinCode) {
      Alert.alert("All Fields are Mandatory");
    } else {
      navigation.navigate("Checkout", { shipping: shipping });
    }
  };

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
            label="Address"
            name="address"
            value={address}
            onChangeText={(address) => setAddress(address)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <TextInput
            label="City"
            name="city"
            value={city}
            onChangeText={(city) => setCity(city)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <TextInput
            label="State"
            name="state"
            value={state}
            onChangeText={(state) => setState(state)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <TextInput
            label="PinCode"
            name="pincode"
            keyboardType="numeric"
            value={pinCode}
            onChangeText={(pinCode) => setPinCode(pinCode)}
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
              onPress={addressHandler}
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
export default ShippingAddress;
