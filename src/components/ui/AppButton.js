import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { THEME } from "../../theme";

export const AppButton = ({
  children,
  style = {},
  colorText = "#fff",
  activeOpacity = 0.8,
  align = "center",
  click
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={click}
      style={[styles.button, style]}
    >
      <Text style={[styles.title, { color: colorText, textAlign: align }]}>
        {children}
      </Text>
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
