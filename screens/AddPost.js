import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import React from "react";
import CircleVector from "../components/CircleVector";
import SelectList from "react-native-dropdown-select-list";
import { Avatar } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_categories } from "../slices/categorySlice";

const CreatePost = ({ navigate, route }) => {
  const [selected, setSelected] = React.useState("");
  const [post, setPost] = React.useState("");

  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  const handleImage = () => {
    navigation.navigate("camera", {
      updateProfile: false,
    });
  };

  useEffect(() => {
    dispatch(get_categories());
  }, []);
  // const Categories = category.map;
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
          <TouchableOpacity onPress={handleImage}>
            <Text style={{ color: "#900" }}>Add Photo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <TextInput
            label="Title Of Your Post"
            name="name"
            placeholder="Leather oriented shoes"
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />

          <TextInput
            label="Description"
            multiline={true}
            name="name"
            placeholder="Leather oriented shoes"
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />

          <TextInput
            label="Price of Your Product"
            multiline={true}
            name="name"
            placeholder="30$"
            // onChangeText={(email) => setEmail(email)}
            style={styles.loginInput}
            underlineColor="transparent"
          />
          <SelectList
            // onSelect={() => alert(selected)}
            setSelected={setSelected}
            // data={category && categor}
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
            }} //override default styles
            // defaultOption={{ key:'1', value:'Jammu & Kashmir' }}   //default selected option
          />
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
export default CreatePost;

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
