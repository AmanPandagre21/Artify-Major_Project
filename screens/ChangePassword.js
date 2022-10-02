import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { COLORS, assets } from "../constants/Index";
import CircleVector from "../components/CircleVector";
import { Avatar } from "react-native-paper";
import { TextInput, Button } from "react-native-paper";

const ChangePassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 0 }}>
        <CircleVector />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.headerText}>Change Password</Text>
        </View>

        <View style={styles.profileView}>
          <Avatar.Image
            size={90}
            source={assets.AvatarImg}
            style={{ marginLeft: 20 }}
          />

          <Text style={styles.ProfileName}>Muskan Mishra</Text>
        </View>
        <View style={styles.footer}>
          {/* <View style={styles.textboxAndbtn}>
   </View> */}

          <TextInput
            label="Old Password"
            name="oldPassword"
            // value={email}
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <TextInput
            label="New Password"
            name="newPassword"
            // value={email}
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <TextInput
            label="Confirm Password"
            name="confirmPassword"
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
            }}
            style={styles.btn}
          >
            Change Password
          </Button>
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
    fontSize: 32,
    lineHeight: 48,
    color: "#363488",
  },
  profileView: {
    marginTop: 25,
    flexDirection: "row",
    width: "90%",
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
    marginTop: 20,
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 5,
    paddingBottom: 25,
    paddingTop: 25,
    flex: 1,
    top: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginInput: {
    margin: "3%",
    width: "88%",
    backgroundColor: COLORS.Gray,
    borderRadius: 16,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  btn: {
    margin: "5%",
    width: "87%",
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "2%",
    justifyContent: "center",
  },
});
export default ChangePassword;
