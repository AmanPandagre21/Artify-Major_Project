import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Provider as PaperProvider } from "react-native-paper";

// screens
import StartScreen from "./screens/StartScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import DashBoard from "./screens/DashBoard";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [initialize, setInitialize] = useState(true);
  const [user, setUser] = useState();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (initialize) setInitialize(false);
    });
  }, []);

  if (initialize) return null;

  if (!user) {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="StartScreen"
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashBoard" component={DashBoard} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <PaperProvider>
      <NavigationContainer theme={theme}>
        <App />
      </NavigationContainer>
    </PaperProvider>
  );
};
