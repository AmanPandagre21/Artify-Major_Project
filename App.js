import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { store } from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";

// screens
import StartScreen from "./screens/StartScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import Home from "./screens/Home";
import ChangePassword from "./screens/ChangePassword";
import EnterOtpForgotPassword from "./screens/EnterOtpForgotPass";
import ResetPassword from "./screens/ResetPasswordScreen";
import { loggedArtist } from "./slices/user-artist-Slice/artistSlice";
import BottomTab from "./Navigation/BottomTab";
import AuthNav from "./Navigation/AuthNav";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  // const [initialize, setInitialize] = useState(true);
  // const [user, setUser] = useState();

  // Handle user state changes
  // const onAuthStateChanged = (user) => {
  //   setUser(user);
  //   if (initialize) setInitialize(false);
  // };

  // useEffect(() => {
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loggedArtist());
  }, [dispatch]);

  const { isAuth, status } = useSelector((state) => state.artist);
  return (
    // <Stack.Navigator
    //   screenOptions={{ headerShown: false }}
    //   initialRouteName={isAuth ? "Home" : "StartScreen"}
    // >
    //   <Stack.Screen name="StartScreen" component={StartScreen} />
    //   <Stack.Screen name="Login" component={Login} />
    //   <Stack.Screen name="Register" component={Register} />
    //   <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    //
    //   <Stack.Screen name="Home" component={Home} />
    // </Stack.Navigator>

    <NavigationContainer theme={theme}>
      <AuthNav />
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
};
