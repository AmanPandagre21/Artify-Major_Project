import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { COLORS, assets } from "../constants/Index";
import { useNavigation } from "@react-navigation/native";
import { TextInput, Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import CircleVector from "../components/CircleVector";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  artistLogin,
  clear_all_errors,
  loggedArtist,
} from "../slices/user-artist-Slice/artistSlice";

const Login = () => {
  const [passIcon, setPassIcon] = useState("eye");
  const [flag, setFlag] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const { artist, isAuth, status } = useSelector((state) => state.artist);
  const dispatch = useDispatch();

  const onLogin = (username, password) => {
    dispatch(artistLogin(username, password));
  };

  useEffect(() => {
    if (status && status.type === "error") {
      Alert.alert(status.message);
      // dispatch(clear_all_errors());
    }

    if (isAuth) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Login");
    }
  }, [isAuth, status]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 0 }}>
        {/* Headear  Part */}
        <CircleVector />
        <View
          style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
        >
          <Image
            source={assets.LoginVector}
            resizeMode="contain"
            style={styles.start_img}
          ></Image>
          <Text style={styles.welcomeText}>WELCOME BACK</Text>
        </View>

        {/* Input Fields Part */}

        <View style={styles.inputContainer}>
          <TextInput
            label="Username"
            name="username"
            value={username}
            onChangeText={(username) => setUsername(username)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <TextInput
            label="Password"
            name="password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={flag}
            style={styles.loginInput}
            underlineColor="transparent"
            right={
              <TextInput.Icon
                icon={passIcon}
                onPress={() => {
                  setFlag(!flag);
                  if (passIcon == "eye") {
                    setPassIcon("eye-off");
                  } else {
                    setPassIcon("eye");
                  }
                }}
              />
            }
          />
          <Button onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={{ color: COLORS.PrimaryColor, fontSize: 14 }}>
              Forgot Password ?
            </Text>
          </Button>
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
            onPress={() => onLogin(username, password)}
          >
            SIGN IN
          </Button>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Text style={styles.orclass}></Text>
            <Text style={{ marginLeft: 10, marginRight: 10 }}>OR</Text>
            <Text style={styles.orclass}></Text>
          </View>
          {/* <Button
            icon="gmail"
            mode="contained"
            buttonColor={COLORS.SecondaryColor}
            textColor={COLORS.Black}
            labelStyle={{
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: 1,
              textAlign: "center",
            }}
            style={styles.gmailLoginBtn}
            onPress={signUpWithGoogle}
          >
            Google
          </Button> */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 14,
            }}
          >
            <Text>Dont have any account ? </Text>
            <TouchableOpacity
              mode="text"
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={{ color: "#AD40AF", fontWeight: "700" }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.SecondaryColor,
  },
  start_img: {
    width: 350,
    height: 220,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 0,
  },
  welcomeText: {
    color: COLORS.PrimaryColor,
    fontSize: 30,
    textAlign: "center",
    margin: 2,
  },
  inputContainer: {
    width: "100%",
    height: "auto",
    marginTop: 10,
    marginBottom: "auto",
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
  loginInput: {
    margin: "3%",
    width: "88%",
    backgroundColor: COLORS.Gray,
    borderRadius: 16,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  loginBtn: {
    marginTop: "8%",
    width: "87%",
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "2%",
    justifyContent: "center",
  },
  gmailLoginBtn: {
    marginTop: "8%",
    width: "87%",
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "2%",
    justifyContent: "center",
  },

  orclass: {
    width: "30%",
    height: "1%",
    backgroundColor: COLORS.Black,
    marginTop: 10,
  },
});
