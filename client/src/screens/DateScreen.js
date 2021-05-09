import React, { useState } from "react";
import { Text } from "react-native";
import { THEME } from "../theme";

export const DateScreen = () => {
  const [date, setDate] = useState({ from: undefined, to: undefined });

  return <Text>date</Text>;
};

DateScreen.navigationOptions = () => {
  return {
    headerTitle: "Выбор даты",
    headerTintColor: THEME.GREY_COLOR
  };
};
