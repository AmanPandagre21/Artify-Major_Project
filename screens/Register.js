import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import CircleVector from "../components/CircleVector";
import { COLORS, assets } from "../constants/Index";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  artistRegister,
  clear_all_errors,
} from "../slices/user-artist-Slice/artistSlice";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(clear_all_errors());
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const data = {
    name,
    email,
    // phone,
    password,
    confirmPassword,
  };
  const onRegister = () => {
    dispatch(artistRegister(data));
  };

  const { status } = useSelector((state) => state.artist);
  useEffect(() => {
    if (status && status.type === "error" && status.message !== null) {
      Alert.alert(status.message);
      dispatch(clear_all_errors());
    }

    if (status && status.type === "idle" && status.message !== null) {
      Alert.alert(status.message);

      navigation.navigate("Login");
    }
  }, [status, Alert, navigation, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 0 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CircleVector />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.headerText}>Lets get Started</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            label="Enter your name"
            name="name"
            value={name}
            onChangeText={(name) => setName(name)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <TextInput
            label="Enter you email id"
            name="email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          {/* <TextInput
            label="Enter you phone number"
            name="phoneno"
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
            keyboardType="numeric"
            style={styles.loginInput}
            underlineColor="transparent"
          /> */}
          <TextInput
            label="Enter your password"
            name="password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            style={styles.loginInput}
            secureTextEntry
            underlineColor="transparent"
          />
          <TextInput
            label="Confirm password"
            name="confirmpassword"
            value={confirmPassword}
            onChangeText={(confirmPassword) =>
              setConfirmPassword(confirmPassword)
            }
            style={styles.loginInput}
            secureTextEntry
            underlineColor="transparent"
          />
          <Button
            mode="contained"
            buttonColor={COLORS.PrimaryColor}
            textColor={COLORS.White}
            labelStyle={{
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: 1,
              textAlign: "center",
            }}
            style={styles.loginBtn}
            onPress={onRegister}
            disabled={status.type === "loading" ? "disabled" : ""}
          >
            {status.type === "loading" ? (
              <ActivityIndicator animating={true} color={MD2Colors.red800} />
            ) : (
              "SIGN UP"
            )}
          </Button>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <Text style={styles.orclass}></Text>
            <Text style={{ marginLeft: 10, marginRight: 10 }}>OR</Text>
            <Text style={styles.orclass}></Text>
          </View>
          {/* <Button
            mode="contained"
            buttonColor={COLORS.PrimaryColor}
            textColor={COLORS.White}
            labelStyle={{
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: 1,
              textAlign: "center",
            }}
            style={styles.loginBtn}
            onPress={() => console.log("hello")}
          >
            SIGN IN
          </Button> */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 14,
            }}
          >
            <Text>Dont have any account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
                Sign In
              </Text>
            </TouchableOpacity>
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
  },

  inputContainer: {
    width: "100%",
    height: "auto",
    marginTop: 10,
    backgroundColor: COLORS.White,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 10,
    paddingTop: 25,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    // fontFamily: 'Poppins',
    fontWeight: "bold",
    fontSize: 32,
    lineHeight: 48,
    color: "#363488",
  },

  loginInput: {
    margin: "3%",
    width: "88%",
    backgroundColor: COLORS.Gray,
    borderRadius: 16,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },

  textstyle: {
    alignItems: "center",
    color: "black",
    alignItems: "center",
  },
  orclass: {
    width: "30%",
    height: "1%",
    backgroundColor: COLORS.Black,
    marginTop: 10,
  },
  loginBtn: {
    marginTop: "8%",
    width: "87%",
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
  },
});
export default Register;
