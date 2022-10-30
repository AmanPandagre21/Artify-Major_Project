import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import ArtImage1 from "../assets/images/shirt1.jpg";

const Row = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};
const Col = ({ children }) => {
  return <View style={styles.col}>{children}</View>;
};
const Post = () => {
  return (
    <View style={styles.app}>
      <Row>
        <Col>
          <TouchableOpacity>
            <Image source={ArtImage1} style={styles.img} />
          </TouchableOpacity>
        </Col>
        <Col>
          <TouchableOpacity>
            <Image source={ArtImage1} style={styles.img} />
          </TouchableOpacity>
        </Col>
        <Col>
          <TouchableOpacity>
            <Image source={ArtImage1} style={styles.img} />
          </TouchableOpacity>
        </Col>
      </Row>
    </View>
  );
};
const styles = StyleSheet.create({
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 400,
  },
  col: {
    borderColor: "#fff",
    borderWidth: 1,
    flex: 3,
    marginLeft: "2%",
  },
  row: {
    flexDirection: "row",
    marginTop: 20,
  },
  img: {
    height: 100,
    width: 100,
    marginLeft: 10,
  },
});
export default Post;
