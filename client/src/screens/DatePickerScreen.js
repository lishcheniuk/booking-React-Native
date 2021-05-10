import { set } from "mobx";
import { observer, useLocalStore } from "mobx-react-lite";
import React, { useEffect, useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CalendarMonth } from "../components/CalendarMonth";
import { AppButton } from "../components/ui/AppButton";
import { AppText } from "../components/ui/AppText";
import { AppTitle } from "../components/ui/AppTitle";
import { useMoment } from "../hooks/useMoment";
import searchState from "../store/searchState";
import { THEME } from "../theme";

export const DatePickerScreen = observer(({ navigation }) => {
  const { currentDate, calendar, generateCalendar } = useMoment();
  const { from, to } = searchState.getDates;
  const [dates, setDates] = useState({ from, to });

  useEffect(() => {
    generateCalendar();
  }, []);

  function setDateHandler(date) {
    setDates((prev) => {
      if ((prev.from && prev.to) || prev.from > date) {
        return { from: date, to: null };
      } else if (prev.from) {
        return { ...prev, to: date };
      }
      return { ...prev, from: date };
    });
  }

  function selectDates() {
    searchState.selectDates(dates);
    navigation.goBack();
  }

  return (
    <View style={{ position: "relative" }}>
      <FlatList
        data={calendar}
        renderItem={({ item }) => (
          <CalendarMonth
            month={item}
            dateFrom={dates.from}
            dateTo={dates.to}
            set={setDateHandler}
          />
        )}
        keyExtractor={(_, idx) => (idx + 1).toString()}
        initialNumToRender={3}
      />
      <View style={styles.selectedDates}>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ flexGrow: 1 }}>
            <AppText style={styles.arrow}>Заезд</AppText>
            <AppTitle style={styles.date}>
              {dates.from
                ? dates.from.format("dd, DD MMM")
                : currentDate.format("dd, DD MMM")}
            </AppTitle>
          </View>
          <View style={{ flexGrow: 1 }}>
            <AppText style={styles.arrow}>Отьезд</AppText>
            <AppTitle style={styles.date}>
              {dates.to ? dates.to.format("dd, DD MMM") : "--"}
            </AppTitle>
          </View>
        </View>
        <AppButton title="Выбрать дату" click={selectDates} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  selectedDates: {
    position: "absolute",
    bottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    width: "100%",
    borderTopWidth: 0.5,
    borderColor: THEME.GREY_COLOR_LIGHT
  },
  date: {
    fontSize: 18
  },
  arrow: { color: THEME.GREY_COLOR }
});
