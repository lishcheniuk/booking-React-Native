import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { THEME } from "../../theme";

export const AppButton = ({
  title,
  style = {},
  colorText = "#fff",
  activeOpacity = 0.9,
  click
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={click}
      style={[styles.button, style]}
    >
      <Text style={[styles.title, { color: colorText }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.PRIMARY_COLOR,
    borderRadius: 5,
    padding: 10
  },
  title: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "roboto-bold"
  }
});
