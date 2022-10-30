import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants/Theme";
import { RectButton } from "../components/Button";
import { NFTTitle } from "../components/SubInfo";

import person04 from "../assets/images/person04.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Wishlistcard = (data) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 20 }}>
        {/* <Image
          source={nft07}
          resizeMode="cover"
          style={{
            width:"100%",
            height:"100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
          /> */}
        {/* <CircleButton imgUrl={assets.heart} right = {10} top={10} /> */}
      </View>
      {/* <SubInfo /> */}

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <EthPrice price = {data.price}/> */}

          <Image
            source={person04}
            style={{
              marginBottom: SIZES.font - 20,
              marginTop: SIZES.font - 110,
            }}
          />
          <View
            style={{
              marginTop: -7 * SIZES.large,
              // fontFamily : FONTS.bold,
              fontSize: SIZES.extraLarge,
            }}
          >
            <Text>Canva Paint</Text>
            <Text
              style={{
                textAlign: "left",
              }}
            >
              🗒️ Here the text written depicts.....
            </Text>
            <Text>20$</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                position: "absolute",
                marginLeft: -170,
                marginTop: -4,
              }}
            >
              {/* <MaterialCommunityIcons name = "delete-empty" size={35} color='#363488' /> */}
              <MaterialCommunityIcons
                name="delete-circle-outline"
                size={47}
                color="#363488"
              />
            </TouchableOpacity>
            <RectButton
              minWidth={120}
              // fontSize = {SIZES.font}
              marginLeft={-110}
              handlePress={() => navigation.navigate("Details", { data })}
            />
          </View>
        </View>
      </View>
      {/* <Text>Beautiful Product</Text> */}
    </View>
  );
};

export default Wishlistcard;
