import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { AppText } from "./ui/AppText";
import { THEME } from "../theme";
import { AppTextBold } from "./ui/AppTextBold";
import { AntDesign } from "@expo/vector-icons";

export const RecentSearchCard = () => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
      <View style={styles.card}>
        <Image source={require("../../assets/rome.jpg")} style={styles.image} />
        <View
          style={{ flex: 1, justifyContent: "center", paddingHorizontal: 15 }}
        >
          <AppTextBold style={styles.title}>Рим</AppTextBold>
          <AppText style={styles.date}>25 мая - 29 мая</AppText>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.close}
          onPress={() => {}}
        >
          <AntDesign name="close" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
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
