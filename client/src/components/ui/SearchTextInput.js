import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { THEME } from "../../theme";

export const SearchTextInput = React.forwardRef(({ focus }, ref) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Текущее местоположение"
      placeholderTextColor={THEME.GREY_COLOR}
      onFocus={focus}
      ref={ref}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    color: "#000",
    borderRadius: 40,
    backgroundColor: THEME.GREY_COLOR_LIGHT,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 3
  }
});
