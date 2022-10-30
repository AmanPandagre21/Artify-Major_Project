import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Avatar } from "react-native-paper";
import AvtarImg from "../assets/avtar.jpg";
import { useSelector } from "react-redux";

const Profile = () => {
  const { artist } = useSelector((state) => state.artist);

  return (
    <View style={styles.profileView}>
      <Avatar.Image
        size={90}
        source={{ uri: artist && artist.avatar.url }}
        style={{ marginLeft: 20 }}
      />

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
