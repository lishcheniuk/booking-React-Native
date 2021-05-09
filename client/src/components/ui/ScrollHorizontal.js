import React from "react";
import { ScrollView, Text } from "react-native";

export const ScrollHorizontal = ({ children }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};
