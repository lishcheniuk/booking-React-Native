import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AppText } from "./ui/AppText";
import { THEME } from "../theme";
import { AppTitle } from "./ui/AppTitle";
import { AntDesign } from "@expo/vector-icons";

export const RecentSearchCard = () => {
  return (
    <View style={styles.card}>
      <Image source={require("../../assets/rome.jpg")} style={styles.image} />
      <AppTitle style={styles.title}>Рим</AppTitle>
      <AppText style={styles.date}>25 мая - 29 мая</AppText>
      {/* <Text style={styles.close}>&times;</Text> */}
      <View style={styles.close}>
        <AntDesign name="close" size={16} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 145,
    height: 150,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: THEME.GREY_COLOR_LIGHT,
    marginLeft: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    position: "relative"
  },
  image: {
    height: "50%",
    width: "100%",
    resizeMode: "cover"
  },
  title: {
    fontSize: 16
  },
  date: {
    marginLeft: 15,
    fontSize: 12,
    color: THEME.GREY_COLOR
  },
  close: {
    borderRadius: 15,
    backgroundColor: THEME.GREY_COLOR,
    position: "absolute",
    top: 3,
    right: 3,
    padding: 2
  }
});
