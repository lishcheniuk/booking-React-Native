import React from "react";
import { StyleSheet, Text } from "react-native";

export const AppTextBold = (props) => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: "roboto-bold"
  }
});
