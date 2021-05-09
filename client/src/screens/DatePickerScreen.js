import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CalendarMonth } from "../components/CalendarMonth";
import { AppButton } from "../components/ui/AppButton";
import { DatePickerNavigation } from "../components/ui/DatePickerNavigation";
import { AppText } from "../components/ui/AppText";
import { AppTitle } from "../components/ui/AppTitle";
import { useMoment } from "../hooks/useMoment";
import { THEME } from "../theme";

export const DatePickerScreen = () => {
  const { calendar, generateCalendar } = useMoment();

  useEffect(() => {
    generateCalendar();
  }, []);

  return (
    <View style={{ position: "relative" }}>
      <FlatList
        data={calendar}
        renderItem={({ item }) => <CalendarMonth month={item} />}
        keyExtractor={(_, idx) => (idx + 1).toString()}
      />
      <View style={styles.selectedDates}>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ flexGrow: 1 }}>
            <AppText style={styles.arrow}>Заезд</AppText>
            <AppTitle style={styles.date}>ср, 12 мая</AppTitle>
          </View>
          <View style={{ flexGrow: 1 }}>
            <AppText style={styles.arrow}>Отьезд</AppText>
            <AppTitle style={styles.date}>чт, 13 мая</AppTitle>
          </View>
        </View>
        <AppButton title="Выбрать дату" click={() => {}} />
      </View>
    </View>
  );
};

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

DatePickerScreen.navigationOptions = () => {
  return {
    headerTitle: "Выбор даты",
    headerTintColor: THEME.GREY_COLOR,
    header: ({ scene, _previous, navigation }) => {
      const { options } = scene.descriptor;
      const title =
        options.headerTitle !== undefined
          ? options.headerTitle
          : options.title !== undefined
          ? options.title
          : scene.route.name;
      return (
        <DatePickerNavigation
          title={title}
          back={() => navigation.goBack()}
          style={options.headerStyle}
        />
      );
    }
  };
};
