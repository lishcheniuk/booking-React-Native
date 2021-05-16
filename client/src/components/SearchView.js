import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../theme";
import { AppButton } from "./ui/AppButton";
import { SearchTextInput } from "./ui/SearchTextInput";
import searchState from "../store/searchState";
import { useMoment } from "../hooks/useMoment";

export const SearchView = observer(() => {
  const { currentDate } = useMoment();
  const navigation = useNavigation();
  const countPlaces = searchState.allPlaces;
  const countRooms = searchState.countRooms;

  const { from, to } = searchState.getDates;
  const dateFrom = from ? from : currentDate;
  const dateTo = to ? to : dateFrom.clone().add(1, "day");

  function toScreen(routeName) {
    navigation.navigate(routeName);
  }

  return (
    <View style={styles.searchContainer}>
      <Text style={styles.label}>Направление</Text>
      <SearchTextInput focus={() => toScreen("Search")} />

      <View style={styles.filter}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => toScreen("Date")}
          style={styles.filterItem}
        >
          <Text style={styles.label}>Даты</Text>
          <Text style={styles.filterValue}>
            {dateFrom.format("DD MMM")} - {dateTo.format("DD MMM")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.filterItem, styles.places]}
          onPress={() => toScreen("Rooms")}
        >
          <Text style={styles.label}>Количество номеров</Text>
          <Text style={styles.filterValue}>
            Гостей: {countPlaces}, номеров: {countRooms}
          </Text>
        </TouchableOpacity>
      </View>
      <AppButton click={() => {}}>Поиск</AppButton>
    </View>
  );
});

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 10,
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 5,
    elevation: 5
  },
  filter: {
    flexDirection: "row",
    marginVertical: 20,
    paddingVertical: 8,
    borderTopColor: THEME.GREY_COLOR_LIGHT,
    borderTopWidth: 0.5,
    borderBottomColor: THEME.GREY_COLOR_LIGHT,
    borderBottomWidth: 0.5
  },
  filterItem: {
    flexGrow: 1
  },
  places: {
    paddingLeft: 15,
    borderLeftColor: THEME.GREY_COLOR_LIGHT,
    borderLeftWidth: 0.5
  },
  label: {
    color: THEME.GREY_COLOR,
    fontSize: 12
  },
  filterValue: {
    fontSize: 16
  }
});
