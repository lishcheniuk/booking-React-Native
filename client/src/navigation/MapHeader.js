import React from "react";
import { View } from "react-native";
import { AppTextBold } from "../components/ui/AppTextBold";
import { THEME } from "../theme";

export const MapHeader = ({
  from,
  to,
  places,
  rooms,
  location = "Текущее местоположение"
}) => {
  return (
    <View>
      <AppTextBold style={{ fontSize: 16 }}>{location}</AppTextBold>
      <AppTextBold style={{ color: THEME.BLACK_COLOR }}>
        {from} - {to} &nbsp;&nbsp; Гостей: {places}, номеров: {rooms}
      </AppTextBold>
    </View>
  );
};
