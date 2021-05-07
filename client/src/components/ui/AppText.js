import React from "react";
import { StyleSheet, Text } from "react-native";

export const AppText = (props) => {
  return <Text style={[styles.text, props.styles]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: "roboto-regular"
  }
});
