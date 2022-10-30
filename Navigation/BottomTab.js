import React from "react";
import { TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import SettingsScreen, {
  AddPostScreen,
  HomeScreen,
  UserProfileScreen,
  WishListScreen,
} from "./CustomNavigation";

const AddPost = () => {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: "#363488",
          width: 61,
          height: 57,
          borderRadius: 20,
          alignItems: "center",
        }}
      >
        <Ionicons name="add-sharp" size={50} color="white" />
      </View>
    </TouchableOpacity>
  );
};
const BottomTab = ({ navigation }) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F3F8FE",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          borderTopWidth: 0,
          height: "7%",
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome
                name="home"
                size={30}
                color={focused ? "#363488" : "black"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="WishListScreen"
        component={WishListScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <FontAwesome5
                name="shopping-cart"
                size={26}
                color={focused ? "#363488" : "black"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ marginBottom: "100%", height: "70%" }}>
              <AddPost />

              {/* <FontAwesome5 name="shopping-cart" size={26} color={focused?"blue":"black"} /> */}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Likes"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {/* <AntDesign name="heart" size={30} color={focused?"#363488":"black"}  /> */}

              <Ionicons
                name="settings"
                size={30}
                color={focused ? "#363488" : "black"}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {/* <Feather name="user" size={30} color={focused?"#363488":"black"} /> */}
              {/* <FontAwesome name="user" size={30} color={focused?"#363488":"black"}/> */}
              {/* <FontAwesome name="user-circle-o" size={30} color={focused?"#363488":"black"} /> */}
              <FontAwesome5
                name="user-alt"
                size={30}
                color={focused ? "#363488" : "black"}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
