import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
} from "react-native";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { toggleAnimation } from "../animations/toggleAnimation";

const Accordion = ({ title, bodyText }) => {
  const [showContent, setShowContent] = useState(true);
  const animationController = useRef(new Animated.Value(0)).current;
  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setShowContent(!showContent);
  };
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => toggleListItem()}
        style={{ width: "98%" }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}> {title} </Text>
          <Animated.View style={{ transform: [{ rotateZ: arrowTransform }] }}>
            {/* <MaterialIcons name={"keyboard-arrow-right"} size={30} /> */}
          </Animated.View>
        </View>
      </TouchableOpacity>
      {showContent && (
        <View style={styles.body}>
          <Text>{bodyText}</Text>
        </View>
      )}
    </View>
  );
};
export default Accordion;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop:'2%',
    padding:'2%',
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: "2%",
    overflow: "hidden",
    backgroundColor:'#6B728E'  //"rgba(133, 133, 185, 0.75)"
  },
  title: {
    fontSize: 18,
    color: "#363488",
    fontWeight: "bold",
  },
  body: {
    paddingHorizontal: "2%",
    paddingVertical: "3%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
