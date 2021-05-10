import React from "react";
import { Text, View } from "react-native";
import { THEME } from "../theme";

export const CalendarWeek = ({ week, dateFrom, dateTo, set }) => {
  function isSelected(date, disabled) {
    return !date || disabled || dateFrom === date;
  }

  function selectDate({ value, disabled }) {
    if (isSelected(value, disabled)) return false;
    set(value);
  }

  const dayStyles = ({ value, disabled }) => {
    const day = value.toString();
    const from = dateFrom && dateFrom.toString();
    const to = dateTo && dateTo.toString();

    const color =
      day === from || day === to || !value
        ? "#fff"
        : disabled
        ? THEME.GREY_COLOR_LIGHT
        : "#000";
    const backgroundColor =
      day === from || day === to
        ? THEME.PRIMARY_COLOR
        : value > dateFrom && value < dateTo
        ? "#9adcf4"
        : "#fff";

    return {
      color,
      backgroundColor,
      borderTopLeftRadius: day === from ? 30 : 0,
      borderBottomLeftRadius: day === from ? 30 : 0,
      borderTopRightRadius: day === to ? 30 : 0,
      borderBottomRightRadius: day === to ? 30 : 0,
      fontSize: 16,
      paddingVertical: 20,
      paddingHorizontal: 24
    };
  };

  return (
    <View style={{ flexDirection: "row" }}>
      {week.map((day, idx) => {
        return (
          <Text
            key={idx}
            style={dayStyles(day)}
            onPress={() => selectDate(day)}
          >
            {day.value ? day.value.format("DD") : "00"}
          </Text>
        );
      })}
    </View>
  );
};
