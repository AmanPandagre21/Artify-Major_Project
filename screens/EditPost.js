import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import React from "react";
import CircleVector from "../components/CircleVector";
import SelectList from "react-native-dropdown-select-list";
import { Avatar, Switch } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_categories } from "../slices/categorySlice";
import mime from "mime";
import {
  add_post,
  clear_all_errors,
  update_artist_post,
  update_post,
} from "../slices/postSlice";

import postPhoto from "../assets/images/avtar.jpg";

const AddPost = ({ navigation, route }) => {
  const { postId, sell, description, title, image } = route.params;
  // use State
  const [editTitle, setEditTitle] = React.useState(title);
  const [editDescription, setEditDescription] = React.useState(description);
  const [isSwitchOn, setIsSwitchOn] = React.useState(sell);

  // Store
  const dispatch = useDispatch();

  // handlers
  const postHandler = async () => {
    await dispatch(
      update_artist_post(postId, editTitle, editDescription, isSwitchOn)
    );
  };

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const { status } = useSelector((state) => state.posts);

  // useEffect
  useEffect(() => {
    if (status && status.type === "error" && status.message !== null) {
      Alert.alert(status.message);
      dispatch(clear_all_errors());
    }
    if (status && status.message === "Post updated") {
      Alert.alert(status.message);
      navigation.navigate("Home");
    }
  }, [status, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CircleVector />
        <View
          style={{
            alignItems: "center",
            height: 100,
            width: "100%",
            position: "absolute",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 30,
              lineHeight: 48,
              color: "#363488",
              top: 70,
            }}
          >
            Edit Post
          </Text>
        </View>
        <View style={styles.profileView}>
          <Image
            // size={100}
            source={{ uri: image }}
            style={{ width: 300, height: 300, borderRadius: 6 }}
          />
        </View>

        <View style={styles.footer}>
          <TextInput
            label="Title Of Your Post"
            name="title"
            value={editTitle}
            onChangeText={(editTitle) => setEditTitle(editTitle)}
            style={styles.loginInput}
            underlineColor="transparent"
          />

          <TextInput
            label="Description"
            multiline={true}
            name="description"
            value={editDescription}
            onChangeText={(editDescription) =>
              setEditDescription(editDescription)
            }
            style={styles.loginInput}
            underlineColor="transparent"
          />

          <View
            style={{
              height: 200,
              width: "90%",
              flexDirection: "row",
              marginLeft: "auto",
              marginRight: "40%",
            }}
          >
            <TouchableOpacity
              style={{
                width: "45%",
                height: 50,
                backgroundColor: isSwitchOn ? "green" : "red",
                borderRadius: 10,
                marginTop: "10%",
                marginLeft: "6%",
              }}
              onPress={onToggleSwitch}
            >
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    textAlign: "center",
                    marginTop: "7%",
                  }}
                >
                  Not for Sale
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "45%",
                height: 50,
                backgroundColor: "#363488",
                borderRadius: 10,
                marginTop: "10%",
                marginLeft: "6%",
              }}
              onPress={postHandler}
            >
              <View>
                <Text
                  style={{
                    color: "white",
                    fontSize: 15,
                    textAlign: "center",
                    marginTop: "7%",
                    // marginTop:"auto",
                    // marginBottom:"auto"
                  }}
                >
                  Edit Post!!
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AddPost;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 0,
  },
  profileView: {
    marginTop: 10,
    flexDirection: "column",
    width: "90%",
    position: "relative",
    marginLeft: "13%",
    marginRight: "auto",
    height: "auto",
  },
  ProfileName: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 20,
    marginRight: "auto",
    color: "#363488",
  },
  footer: {
    width: "100%",
    height: "100%",
    marginTop: "5%",
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 5,
    paddingTop: 25,
    flex: 1,
    top: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginInput: {
    margin: "6%",
    height: 65,
    width: "88%",
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
  },
});
