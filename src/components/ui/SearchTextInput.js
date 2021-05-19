import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { THEME } from "../../theme";

export const SearchTextInput = ({
  autoFocus = false,
  placeholder,
  value = "",
  onChange,
  onFocus
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={THEME.GREY_COLOR}
      onFocus={onFocus}
      value={value}
      onChangeText={onChange}
      autoFocus={autoFocus}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    color: THEME.BLACK_COLOR,
    borderRadius: 40,
    backgroundColor: THEME.GREY_COLOR_LIGHT,
    paddingHorizontal: 15,
    paddingVertical: 5
  }
});
