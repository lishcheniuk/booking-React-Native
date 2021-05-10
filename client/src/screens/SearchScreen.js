import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { SearchTextInput } from "../components/ui/SearchTextInput";
import { THEME } from "../theme";

export const SearchScreen = () => {
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);
  return (
    <View>
      <SearchTextInput ref={searchRef} />
    </View>
  );
};
