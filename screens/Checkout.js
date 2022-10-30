import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CircleVector from "../components/CircleVector";
import { FONTS } from "../constants/Theme";
import SelectList from "react-native-dropdown-select-list";
import { FontAwesome } from "@expo/vector-icons";

const Checkout = ({ navigation }) => {
  const [selected, setSelected] = React.useState("");
  const data = [
    { key: "1", value: "PhonePe" },
    { key: "2", value: "Google Pay" },
    { key: "3", value: "razor" },
  ];

  const banking = [
    { key: "1", value: "State Bank of India" },
    { key: "2", value: "ICICI" },
    { key: "3", value: "Bank of Baroda" },
    { key: "4", value: "Canara Bank" },
    { key: "5", value: "Dena Bank" },
  ];

  const credit = [
    { key: "1", value: "State Bank of India" },
    { key: "2", value: "ICICI" },
    { key: "3", value: "Bank of Baroda" },
    { key: "4", value: "Canara Bank" },
    { key: "5", value: "Dena Bank" },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <CircleVector></CircleVector>
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
              Checkout
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 22, marginTop: "5%", marginLeft: "5%" }}>
              Shipping Address
            </Text>
            <TouchableOpacity style={styles.editButton}>
              <View>
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginTop: "7%",
                  }}
                >
                  Edit
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: "#F5F5F5",
              width: "90%",
              marginTop: "5%",
              height: "auto",
              marginLeft: "5%",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: "8%",
                marginLeft: "5%",
              }}
            >
              <Text style={{ fontSize: 16 }}>Harish Gehlot</Text>
              <Text style={{ marginLeft: "20%", fontSize: 16 }}>
                8319855397
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: "5%",
                marginLeft: "5%",
              }}
            >
              <Text style={{ fontSize: 16 }}>58, Telephone Nagar</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: "4%",
                marginBottom: "6%",
                marginLeft: "5%",
              }}
            >
              <Text style={{ fontSize: 16 }}>452018</Text>
            </View>
          </View>

          <Text
            style={{
              fontSize: 25,
              fontStyle: FONTS.bold,
              textAlign: "center",
              marginTop: "8%",
            }}
          >
            Payment Methods
          </Text>

          <SelectList
            // onSelect={() => alert(selected)}
            setSelected={setSelected}
            data={data}
            placeholder="UPI options"
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
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "5%",
            }} //override default styles
            // defaultOption={{ key:'1', value:'Jammu & Kashmir' }}   //default selected option
          />

          <SelectList
            // onSelect={() => alert(selected)}
            setSelected={setSelected}
            data={banking}
            placeholder="Bank Transfer"
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
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "5%",
            }} //override default styles
            // defaultOption={{ key:'1', value:'Jammu & Kashmir' }}   //default selected option
          />

          <SelectList
            // onSelect={() => alert(selected)}
            setSelected={setSelected}
            data={credit}
            placeholder="Credit / Debit Card"
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
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "5%",
            }} //override default styles
            // defaultOption={{ key:'1', value:'Jammu & Kashmir' }}   //default selected option
          />

          <TouchableOpacity
            style={{
              width: "90%",
              height: 50,
              backgroundColor: "#363488",
              borderRadius: 10,
              marginTop: "5%",
              marginLeft: "5%",
              marginBottom: 100,
            }}
            onPress={() => navigation.navigate("CreditPayment")}
          >
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  textAlign: "center",
                  marginTop: "3%",
                }}
              >
                Checkout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  editButton: {
    backgroundColor: "#363488",
    marginLeft: "20%",
    width: "20%",
    height: "60%",
    borderRadius: 9,
    marginTop: "5%",
  },
});
