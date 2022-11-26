import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { Avatar } from "react-native-paper";
import { useSelector } from "react-redux";
import Loader from "./loader";

const Profile = () => {
  const { artist, status } = useSelector((state) => state.artist);

  return status.type === "loading" ? (
    <Loader />
  ) : (
    <View style={styles.profileView}>
      <Text style={styles.ProfileName}>{artist && artist.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileView: {
    marginTop: 10,
    flexDirection: "row",
    width: "90%",
    position: "relative",
    marginLeft: "auto",
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
});
export default Profile;
