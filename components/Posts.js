import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import {
  ActivityIndicator,
  MD2Colors,
  Modal,
  Text,
  Provider,
  Portal,
  Button,
} from "react-native-paper";

const Row = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};
const Col = ({ children }) => {
  return <View style={styles.col}>{children}</View>;
};
const Post = ({ post, status }) => {
  {
    const navigation = useNavigation();
    return post ? (
      <View style={styles.app}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {status.type === "loading" ? (
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          ) : (
            post &&
            post.map((ele) => {
              return (
                <TouchableOpacity
                  key={ele._id}
                  onPress={() =>
                    navigation.navigate("EditPost2", {
                      postId: ele._id,
                    })
                  }
                >
                  <Image source={{ uri: ele.image.url }} style={styles.img} />
                </TouchableOpacity>
              );
            })
          )}
        </View>
      </View>
    ) : (
      // <Image source="" />
      <Text>ttt</Text>
    );
  }
};
const styles = StyleSheet.create({
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: "100%",
  },

  img: {
    height: 100,
    width: 100,
    margin: 10,
    borderColor: "#000",
    borderWidth: 2,
  },
});
export default Post;
