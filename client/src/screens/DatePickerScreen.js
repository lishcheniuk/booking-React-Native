import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { CalendarMonth } from "../components/CalendarMonth";
import { AppButton } from "../components/ui/AppButton";
import { AppText } from "../components/ui/AppText";
import { AppTextBold } from "../components/ui/AppTextBold";
import { setData } from "../libs/localStorage";
import { useMoment } from "../hooks/useMoment";
import searchState from "../store/searchState";
import { THEME } from "../theme";

export const DatePickerScreen = observer(({ navigation }) => {
  const { currentDate, calendar, generateCalendar } = useMoment();
  const [dates, setDates] = useState(searchState.getDates);
  const [renderMonth, setRenderMonth] = useState(searchState.renderListMonth);

  useEffect(() => {
    generateCalendar();
  }, []);

  function setDateHandler(date, index) {
    setDates((prev) => {
      if ((prev.from && prev.to) || prev.from > date) {
        return { from: date, to: null };
      } else if (prev.from) {
        return { ...prev, to: date };
      }
      return { ...prev, from: date };
    });

    setRenderMonth((prev) => {
      if (prev.length === 3) prev.shift();
      return [...prev, index];
    });
  }

  function selectDates() {
    searchState.selectDates(dates);
    searchState.setRenderListMonth(renderMonth);
    setData("dates", { dates, renderMonth });
    navigation.goBack();
  }

  return (
    <View style={{ position: "relative" }}>
      <FlatList
        data={calendar}
        renderItem={({ item, index }) => (
          <CalendarMonth
            isRender={
              index >= Math.min(...renderMonth) &&
              index <= Math.max(...renderMonth)
            }
            month={item}
            dateFrom={dates.from}
            dateTo={dates.to}
            set={(date) => setDateHandler(date, index)}
          />
        )}
        keyExtractor={(_, idx) => (idx + 1).toString()}
        initialNumToRender={3}
      />
      <View style={styles.selectedDates}>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ flexGrow: 1 }}>
            <AppText style={styles.arrow}>Заезд</AppText>
            <AppTextBold style={styles.date}>
              {dates.from
                ? dates.from.format("dd, DD MMM")
                : currentDate.format("dd, DD MMM")}
            </AppTextBold>
          </View>
          <View style={{ flexGrow: 1 }}>
            <AppText style={styles.arrow}>Отьезд</AppText>
            <AppTextBold style={styles.date}>
              {dates.to ? dates.to.format("dd, DD MMM") : "--"}
            </AppTextBold>
          </View>
        </View>
        <AppButton click={selectDates}>Выбрать дату</AppButton>
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
