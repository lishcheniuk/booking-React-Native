import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { THEME } from "../../theme";

export const AppStars = ({ stars }) => {
  return (
    <View style={{ flexDirection: "row", marginVertical: 5 }}>
      {Array(stars)
        .fill("")
        .map((_, index) => (
          <FontAwesome
            key={index}
            name="star"
            size={12}
            color={THEME.GREY_COLOR}
          />
        ))}
    </View>
  );
};
