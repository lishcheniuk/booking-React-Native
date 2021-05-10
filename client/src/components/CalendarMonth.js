import React from "react";
import { View } from "react-native";
import { CalendarWeek } from "./CalendarWeek";
import { AppText } from "./ui/AppText";

export const CalendarMonth = ({ month, set, dateFrom, dateTo }) => {
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
        <CalendarWeek
          key={index}
          week={week}
          set={set}
          dateFrom={dateFrom}
          dateTo={dateTo}
        />
      ))}
    </View>
  );
};
