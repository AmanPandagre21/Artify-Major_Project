import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ActivityIndicator, MD2Colors , Modal, Text, Provider, Portal, Button} from "react-native-paper";


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
        <Row>
          {status.type === "loading" ? (
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          ) : (
            post &&
            post.map((ele) => {
              return (
                <Col key={ele._id}>
                  <TouchableOpacity onPress={() => navigation.navigate("EditPost2")}>
                    <Image source={{ uri: ele.image.url }} style={styles.img} />
                  </TouchableOpacity>
                  
                  
                </Col>

              );
            })
          )}
        </Row>
      </View>
    ) : (
      <Text>NO Posts available</Text>
    );
  }
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
