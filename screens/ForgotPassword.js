import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import CircleVector from "../components/CircleVector";
import { COLORS } from "../constants/Theme";

const ForgotPassword = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CircleVector />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.forgotPasswordBlock}>
          <Text>Forgot Password</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.SecondaryColor,
  },
  forgotPasswordBlock: {
    width: "90%",
    height: "auto",
    backgroundColor: "red",
  },
});
