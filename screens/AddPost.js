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
import { add_post, get_posts, clear_all_errors } from "../slices/postSlice";
import * as FileSystem from "expo-file-system";

const AddPost = ({ navigation, route }) => {
  // use State
  const [selected, setSelected] = React.useState("");
  const [post, setPost] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState("0");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  // Store
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  const { status } = useSelector((state) => state.posts);

  // handlers

  const postHandler = async () => {
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", selected);
    myForm.append("isForSell", isSwitchOn);
    myForm.append("amount", amount === "0" ? "0" : amount);
    myForm.append("image", {
      uri: post,
      type: mime.getType(post),
      name: post.split("/").pop(),
    });
    await dispatch(add_post(myForm));
    dispatch(get_posts());
  };

  const imageHandler = () => {
    navigation.navigate("camera", {
      updateProfile: false,
    });
  };

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  // useEffect
  useEffect(() => {
    if (status && status.type === "error") {
      Alert.alert(status.message);
      dispatch(clear_all_errors());
    }
    if (status && status.type === "idle") {
      Alert.alert(status.message);
      setPost("");
      setTitle("");
      setDescription("");
      setSelected("Categories");
      setAmount("0");
      setIsSwitchOn(false);
      navigation.navigate("Home");
    }

    dispatch(get_categories());

    if (route.params) {
      if (route.params.image) {
        setPost(route.params.image);
      }
    }
  }, [status, dispatch, route]);

  // set Categories
  const catArr = [];
  category.map((ele, ind) => {
    catArr.push({ key: ele._id, value: ele.name });
  });

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
            Add Post
          </Text>
        </View>
        <View style={styles.profileView}>
          <TouchableOpacity>
            <Avatar.Image
              size={100}
              source={{ uri: post ? post : null }}
              style={{ marginLeft: 20 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={imageHandler}>
            <Text style={{ color: "#900" }}>Change Photo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TextInput
            label="Title Of Your Post"
            name="title"
            value={title}
            onChangeText={(title) => setTitle(title)}
            style={styles.loginInput}
            underlineColor="transparent"
          />

          <TextInput
            label="Description"
            multiline={true}
            name="description"
            value={description}
            onChangeText={(description) => setDescription(description)}
            style={styles.loginInput}
            underlineColor="transparent"
          />

          <SelectList
            // onSelect={(selected) => setCategoryId(selected)}
            setSelected={setSelected}
            data={catArr}
            placeholder="Categories"
            arrowicon={
              <FontAwesome
                name="chevron-down"
                size={15}
                color={"black"}
                style={{ marginLeft: "auto" }}
              />
            }
            searchicon={<FontAwesome name="search" size={12} color={"black"} />}
            search={false}
            dropdownStyles={{
              borderColor: "white",
              backgroundColor: "#F5F5F5",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            dropdownTextStyles={{ color: "#363488" }}
            boxStyles={{
              fontSize: 40,
              height: 65,
              borderColor: "white",
              backgroundColor: "#F5F5F5",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "5%",
            }}
          />

          <Text>Do You Want to add pricing</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch}></Switch>

          {isSwitchOn ? (
            <TextInput
              label="Price of Your Product"
              multiline={true}
              name="amount"
              value={amount}
              onChangeText={(amount) => setAmount(amount)}
              style={styles.loginInput}
              underlineColor="transparent"
            />
          ) : (
            ""
          )}

          <View style={{ height: 200, width: "100%" }}>
            <TouchableOpacity
              style={{
                width: "88%",
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
                    fontSize: 19,
                    textAlign: "center",
                    marginTop: "3%",
                  }}
                >
                  Post it!!
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
    flexDirection: "row",
    width: "90%",
    position: "relative",
    marginLeft: "15%",
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
