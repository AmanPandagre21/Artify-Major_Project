import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import CircleVector from "../components/CircleVector";
import { Button, Searchbar } from "react-native-paper";
import SelectList from "react-native-dropdown-select-list";
import { FontAwesome } from "@expo/vector-icons";
import SearchPost from "../components/SearchPost";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_posts } from "../slices/postSlice";

const SearchPage = () => {
  // const [selected, setSelected] = React.useState("");
  // const categories = [
  //   { key: "1", value: "Paintings" },
  //   { key: "2", value: "Footwears" },
  //   { key: "3", value: "Clothing" },
  //   { key: "4", value: "Music" },
  //   { key: "5", value: "Sketch" },
  //   { key: "6", value: "Health" },
  // ];

  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const dispatch = useDispatch();

  const { posts, status: postStatus } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(get_posts(searchQuery));
  }, [searchQuery, dispatch]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <CircleVector />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            lineHeight: 48,
            color: "#363488",
            position: "absolute",
            marginLeft: "35%",
            marginTop: "16%",
          }}
        >
          Search
        </Text>
        <View
          style={{
            alignItems: "center",
            height: "auto",
            width: "100%",
            position: "absolute",
          }}
        >
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            iconColor="#363488"
            style={{
              width: "79%",
              borderRadius: 15,
              opacity: 0.4,
              marginTop: "30%",
            }}
          />
        </View>

        {/* <SelectList
          // onSelect={() => alert(selected)}
          setSelected={setSelected}
          data={categories}
          placeholder="Filter By Category"
          arrowicon={
            <FontAwesome name="chevron-down" size={12} color={"black"} />
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
            borderColor: "white",
            borderRadius: 50,
            backgroundColor: "#F5F5F5",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10%",
          }} //override default styles
          // defaultOption={{ key:'1', value:'Jammu & Kashmir' }}   //default selected option
        /> */}
        {/* <View style = {{flexDirection:'row',width:"100%",height:"auto"}}>
        <TouchableOpacity style = {{ width : "100%",marginTop:20 }}>
            <Image source={book} style = {{ width:"45%",height:"45%",marginLeft:"6%",borderRadius:20}}/>
        </TouchableOpacity>
        <TouchableOpacity style = {{ width:"100%"}}>
            <Image source = {watch} style = {{width:"45%",height:'45%',borderRadius:20}}/>
        </TouchableOpacity>
    </View> */}
        <View style={{ marginBottom: "15%", alignItems: "center" }}>
          <SearchPost posts={posts} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
});
