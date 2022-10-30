import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Accordion from "../components/Accordion";
import CircleVector from "../components/CircleVector";
import { Divider } from "react-native-paper";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Accordion title={item.title} bodyText={item.body} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const data = [
  {
    id: 0,
    title: "How can i order the product ?",
    body: "Simply click on the view to checkout for the post and make payment as well as enough information about seller so that you can contact him.",
  },
  {
    id: 1,
    title: "What if seller did not sent the product after buying ?",
    body: "Simply report the issue, we will react to you very soon and take some immediate action.",
  },
  {
    id: 2,
    title: "How can i get the information details about seller ?",
    body: "Go to that particular post which you want to buy and there you can get your sellers details.",
  },
  {
    id: 3,
    title: "Can I get some discounts on products ?",
    body: "You can contact the seller for some bargaining options.",
  },
  {
    id: 4,
    title: "Is there any wishlist feature ?",
    body: "Yes there is a wishlist / add to cart feature.",
  },
];
const Faqs = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View style={styles.container}>
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
          FAQs
        </Text>
      </View>

      <View style={styles.footer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Accordion title={item.title} bodyText={item.body} />
              <Divider style={{ backgroundColor: "#363488", height: 2 }} />
            </View>
          )}
          // renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F3F8FE",
    padding: 0,
  },
  footer: {
    width: "100%",
    height: "auto",
    marginTop: 10,
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
  item: {
    // backgroundColor: '#f9c2ff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
