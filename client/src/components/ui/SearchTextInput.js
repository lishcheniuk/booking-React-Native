import React, { useEffect, useRef } from "react";
import { StyleSheet, TextInput } from "react-native";
import { THEME } from "../../theme";

export const SearchTextInput = ({
  onFocus,
  autoFocus = false,
  placeholder = "Текущее местоположение"
}) => {
  const searchRef = useRef();

  useEffect(() => {
    if (autoFocus) searchRef.current.focus();
  }, []);
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={THEME.GREY_COLOR}
      onFocus={onFocus}
      ref={searchRef}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    color: "#000",
    borderRadius: 40,
    backgroundColor: THEME.GREY_COLOR_LIGHT,
    paddingHorizontal: 15,
    paddingVertical: 5
  }
});
