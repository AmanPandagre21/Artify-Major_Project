import { View, Text, Image } from "react-native";
import { COLORS, assets } from "../constants/Index";

const CircleVector = () => {
  return (
    <View style={{ width: "100%" }}>
      <Image
        source={assets.circleVector_1}
        style={{ width: 250, height: 180 }}
      ></Image>
    </View>
  );
};

export default CircleVector;
