import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { COLORS, assets } from "../constants/Index";
import CircleVector from "../components/CircleVector";
import { Avatar } from "react-native-paper";
import { TextInput, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import {
  change_password,
  clear_all_errors,
} from "../slices/user-artist-Slice/artistSlice";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { getToken } from "../services/AsyncStorageService";

const ChangePassword = () => {
  const [oldPass, setOldPass] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const dispatch = useDispatch();
  const { artist, status: artistStatus } = useSelector((state) => state.artist);
  const passInfo = {
    oldPassword: oldPass,
    password: pass,
    confirmPassword: confirmPass,
  };
  const changePassHandler = () => {
    dispatch(change_password(passInfo));
  };

  useEffect(() => {
    if (artistStatus.type === "error") {
      Alert.alert(artistStatus.message);
      dispatch(clear_all_errors());
    }
    if (artistStatus.type === "idle" && artistStatus.message !== null) {
      Alert.alert(artistStatus.message);
      setOldPass("");
      setPass("");
      setConfirmPass("");
    }
  }, [artistStatus, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CircleVector />
        <View style={{ marginTop: "-25%", alignItems: "center" }}>
          <Text style={styles.headerText}>Change Password</Text>
        </View>

        <View style={styles.profileView}>
          <Avatar.Image
            size={90}
            source={{ uri: artist.avatar && artist.avatar.url }}
            style={{ marginLeft: 20 }}
          />

          <Text style={styles.ProfileName}>{artist && artist.name}</Text>
        </View>
        <View style={styles.footer}>
          {/* <View style={styles.textboxAndbtn}>
   </View> */}

          <TextInput
            label="Old Password"
            name="oldPassword"
            value={oldPass}
            onChangeText={(oldPass) => setOldPass(oldPass)}
            style={[styles.loginInput,{marginTop:"15%"}]}
            underlineColor="transparent"
          />
          <TextInput
            label="New Password"
            name="newPassword"
            value={pass}
            onChangeText={(pass) => setPass(pass)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <TextInput
            label="Confirm Password"
            name="confirmPassword"
            value={confirmPass}
            onChangeText={(confirmPass) => setConfirmPass(confirmPass)}
            style={styles.loginInput}
            underlineColor="transparent"
          />

          <Button
            mode="contained"
            buttonColor="#363488"
            textColor="white"
            disabled={
              artistStatus && artistStatus.type === "loading" ? true : false
            }
            labelStyle={{
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: 1,
              textAlign: "center",
            }}
            style={styles.btn}
            onPress={changePassHandler}
          >
            {artistStatus && artistStatus.type === "loading" ? (
              <ActivityIndicator animating={true} color={MD2Colors.red800} />
            ) : (
              "Change Password"
            )}
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
    // paddingTop: 25,
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
    marginBottom: "40%",
    justifyContent: "center",
  },
});
export default ChangePassword;
