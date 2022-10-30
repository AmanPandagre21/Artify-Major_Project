import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./BottomTab";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";
import StartScreen from "../screens/StartScreen";
import ChangePassword from "../screens/ChangePassword";
import EnterOtpForgotPassword from "../screens/EnterOtpForgotPass";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
// import Home from "../Screens/Home";

const Stack = createNativeStackNavigator();
const AuthNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      intialRouteName={"StartScreen"}
    >
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="OTP" component={EnterOtpForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Home" component={BottomTab} />
    </Stack.Navigator>
  );
};
export default AuthNav;
