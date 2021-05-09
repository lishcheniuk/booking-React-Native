import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { THEME } from "../theme";
import { AppText } from "./ui/AppText";
import { AppTitle } from "./ui/AppTitle";

export const RecentViewerCard = () => {
  return (
    <ImageBackground
      source={require("../../assets/barcelona.jpg")}
      style={styles.card}
    >
      <View style={styles.backdrop}>
        <AppTitle style={styles.title}>Aloft Kiev</AppTitle>
        <View style={{ flexDirection: "row" }}>
          <AppText style={styles.rate}>9.1</AppText>
          <AppText style={styles.text}> Киев</AppText>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    height: 120,
    marginLeft: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: THEME.GREY_COLOR_LIGHT,
    overflow: "hidden",
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    padding: 5
  },
  title: {
    color: "#fff",
    fontSize: 16
  },
  rate: {
    borderRadius: 10,
    backgroundColor: "#10ba35",
    color: "#fff",
    paddingHorizontal: 5,
    overflow: "hidden",
    fontSize: 12,
    fontWeight: "500"
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "500"
  }
});
