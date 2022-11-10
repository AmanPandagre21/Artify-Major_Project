import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Row = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};
const Col = ({ children }) => {
  return <View style={styles.col}>{children}</View>;
};
const SearchPost = ({ posts }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.app}>
      {/* <Row> */}
      {posts &&
        posts.map((post) => {
          return (
            <View
              key={post._id}
              style={{ marginTop: "6%", marginLeft: "2%", marginRight: "2%" }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Details", {
                    postId: post._id,
                  })
                }
              >
                <Image source={{ uri: post.image.url }} style={styles.img} />
              </TouchableOpacity>
            </View>
          );
        })}
      {/* </Row> */}
    </View>
  );
};
const styles = StyleSheet.create({
  app: {
    flex: 1, // the number of columns you want to devide the screen into
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginHorizontal: "auto",
    width: 400,
  },
  col: {
    borderColor: "#fff",
    borderWidth: 1,
    flex: 2,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    marginLeft: "3%",
  },
  img: {
    height: 150,
    width: 150,
    marginLeft: 10,
    borderRadius: 20,
  },
});
export default SearchPost;
