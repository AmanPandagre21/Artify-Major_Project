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
import SearchComponent from "../components/SearchComponent";
import SelectList from "react-native-dropdown-select-list";
import { FontAwesome } from "@expo/vector-icons";
import Posts1 from "../components/Post1";

const SearchPage = () => {
  const [selected, setSelected] = React.useState("");
  const categories = [
    { key: "1", value: "Paintings" },
    { key: "2", value: "Footwears" },
    { key: "3", value: "Clothing" },
    { key: "4", value: "Music" },
    { key: "5", value: "Sketch" },
    { key: "6", value: "Health" },
  ];
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
          <SearchComponent />
        </View>

        <SelectList
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
        />
        {/* <View style = {{flexDirection:'row',width:"100%",height:"auto"}}>
        <TouchableOpacity style = {{ width : "100%",marginTop:20 }}>
            <Image source={book} style = {{ width:"45%",height:"45%",marginLeft:"6%",borderRadius:20}}/>
        </TouchableOpacity>
        <TouchableOpacity style = {{ width:"100%"}}>
            <Image source = {watch} style = {{width:"45%",height:'45%',borderRadius:20}}/>
        </TouchableOpacity>
    </View> */}
        <View style={{ marginBottom: "15%", alignItems: "center" }}>
          <Posts1 />
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
