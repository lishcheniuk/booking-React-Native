import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../theme";
import { AppTitle } from "./ui/AppTitle";
import { ScrollHorizontal } from "./ui/ScrollHorizontal";

export const RecentView = ({ children, title }) => {
  return (
    <View style={styles.container}>
      <AppTitle
        style={{
          textTransform: "uppercase",
          letterSpacing: 1.5,
          margin: 15
        }}
      >
        {title}
      </AppTitle>
      <ScrollHorizontal>{children}</ScrollHorizontal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50
  }
});
