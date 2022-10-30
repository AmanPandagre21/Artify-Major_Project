import React from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";

// import {  } from "react-native-gesture-handler";
// import { ImageBackground } from "react-native-web";

import { COLORS, FONTS, SIZES, assets } from "../constants/Theme";

import CircleVector from "../components/CircleVector";

const Wishlistheader = (onSearch) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <CircleVector />
        {/* <View
          style={{
            // backgroundColor: '#363488',
            padding: SIZES.font,
            marginTop: -1,
            
            
          }}
        > */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
          }}
        >
          {/* <Image
              source={assets.logo}
              resizeMode="contain"
              style={{ width: 90, height: 25 }}
            /> */}

          <Text
            // resizeMode="contain"
            style={{
              marginTop: 70,
              width: "100%",
              height: "auto",
              fontSize: SIZES.extraLarge,
              // fontFamily:FONTS.regular,
              textAlign: "center",
              color: "#363488",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Wishlist
          </Text>

          {/* <View style={{ width: 45, height: 45 }}>
              <Image
                source={assets.person01}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
              <Image
                source={assets.badge}
                resizeMode="contain"
                style={{
                  position: "absolute",
                  width: 15,
                  height: 15,
                  bottom: 0,
                  right: 0,
                  marginLeft : '20%'
              }}
              />
            </View> */}

          {/* <View>
            <View
              style={{
                width: "88%",
                borderRadius: SIZES.font,
                backgroundColor: COLORS.gray,
                flexDirection: "row",
                // alignItems: "center",
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.small - 2,
              }}
            >
              <TextInput
                placeholder="Search"
                style={{ marginRight:"80%",color:COLORS.white}}
                onChangeText={onSearch}
              />
              <Image
                source={assets.search}
                resizeMode="contain"
                style={{ width: 20, height: 20, marginRight: SIZES.base - 5 }}
              />
            </View>
          </View> */}
        </View>

        {/* <View style={{ marginVertical: SIZES.font }}>
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.small,
                color: COLORS.white,
              }}
            >
              Hii username
            </Text> */}

        {/* <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.large,
                color: COLORS.white,
                marginTop: SIZES.base / 2,
              }}
            >
              What you looking for
            </Text>
          </View> */}

        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wishlistheader;
