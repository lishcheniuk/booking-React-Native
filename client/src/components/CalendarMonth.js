import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../theme";
import { AppText } from "./ui/AppText";

export const CalendarMonth = ({ month }) => {
  const [betweenDate, setBetweenDate] = useState({ from: null, to: null });

  function isSelected(date, disabled) {
    return !date || disabled || betweenDate.from === date;
  }

  function selectDate({ value: date, disabled }) {
    if (isSelected(date, disabled)) return false;

    setBetweenDate((prev) => {
      if ((prev.from && prev.to) || prev.from > date)
        return { from: date, to: null };
      if (prev.from) return { ...prev, to: date };
      return { ...prev, from: date };
    });
  }

  const dayStyles = ({ value: day, disabled }) => {
    const color =
      day === betweenDate.from || day === betweenDate.to || !day
        ? "#fff"
        : disabled
        ? THEME.GREY_COLOR_LIGHT
        : "#000";
    const backgroundColor =
      day > betweenDate.from && day < betweenDate.to
        ? "#9adcf4"
        : day === betweenDate.from || day === betweenDate.to
        ? THEME.PRIMARY_COLOR
        : "#fff";

    return {
      color,
      backgroundColor,
      borderTopLeftRadius: day === betweenDate.from ? 30 : 0,
      borderBottomLeftRadius: day === betweenDate.from ? 30 : 0,
      borderTopRightRadius: day === betweenDate.to ? 30 : 0,
      borderBottomRightRadius: day === betweenDate.to ? 30 : 0,
      fontSize: 16,
      paddingVertical: 20,
      paddingHorizontal: 24
    };
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 13
      }}
    >
      <AppText style={{ fontSize: 16, marginVertical: 10 }}>
        {month.month.format("MMMM YYYY г.")}
      </AppText>
      {month.monthGenerate.map((week, index) => (
        <View key={index} style={{ flexDirection: "row" }}>
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
      ))}
    </View>
  );
};
