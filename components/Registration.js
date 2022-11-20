import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Input,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import graphic from "../images/Vectorgraphics1.png";
const Registration = () => {
  const handlechange = (e) => {
    var name = e.target.name;
  };

  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneno: 0,
    password: "",
    confirmPass: "",
  });
  return (
    <View style={styles.container}>
      {/* <View >
    <Image source={graphic} />
    </View> */}
      <View style={{ alignItems: "center" }}>
        <Text style={styles.headerText}>Lets get Started</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.textboxAndbtn}>
          <TextInput
            placeholder="Enter your name"
            name="name"
            onChange={handlechange}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Enter you email id"
            name="email"
            value={details.email}
            style={styles.textInput}
          />
          <TextInput
            placeholder="Enter you phone number"
            name="phineno"
            value={details.phoneno}
            keyboardType="numeric"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Enter your password"
            value={details.password}
            name="password"
            style={styles.textInput}
          />
          <TextInput
            placeholder="confirm password"
            name="password"
            value={details.confirmPass}
            style={styles.textInput}
          />
          <View style={styles.registerbtn}>
            {/* <Button
    
    color="#363488"
     title="Sign Up"/> */}
            <TouchableOpacity
              style={{
                backgroundColor: "#363488",
                textcolor: "white",
                height: 40,
                borderRadius: 10,
                padding: 8,
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.line}></View>
          <Text style={{ position: "absolute", marginTop: 10, left: 194 }}>
            OR
          </Text>
          <View style={styles.line2}></View>
          {/* <View style={styles.GoogleIncon}> */}

          <TouchableOpacity style={styles.GoogleIncon}>
            <AntDesign
              name="google"
              style={{ top: 10 }}
              color={"red"}
              size={24}
            />
          </TouchableOpacity>

          {/* </View> */}
          <View
            style={{
              position: "relative",
              marginTop: 100,
              alignItems: "center",
            }}
          >
            <Text>Already have an account?sign in</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F3F8FE",
  },
  textboxAndbtn: {
    alignItems: "center",
    marginTop: 33,
  },
  footer: {
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
    left: 0,
    top: 189,
    // alignItems:"center",
    // backgroundColor:"#F5F5F5"
    backgroundColor: "white",
  },
  headerText: {
    // fontFamily: 'Poppins',
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 48,
    color: "#363488",
    // left: 49,
    top: 137,
  },
  textInput: {
    position: "relative",
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    width: 320,
    height: 52,
    textAlign: "center",
  },
  registerbtn: {
    borderRadius: 20,
    width: 330,
    height: 52,
    marginTop: 20,
  },
  textstyle: {
    alignItems: "center",
    color: "black",
    alignItems: "center",
  },
  line: {
    position: "absolute",
    width: "35%",
    height: 3,
    left: 40,
    backgroundColor: "black",
    border: "5px solid #D9D9D9",
    marginTop: 20,
  },
  line2: {
    position: "absolute",
    width: "35%",
    height: 3,
    left: 225,
    backgroundColor: "black",
    border: "5px solid #D9D9D9",
    marginTop: 20,
  },
  GoogleIncon: {
    position: "relative",
    alignItems: "center",
    borderRadius: 25,
    width: 45,
    height: 45,
    backgroundColor: "#D9D9D9",
    position: "absolute",
    top: 45,
    left: 183,
  },
});
export default Registration;
