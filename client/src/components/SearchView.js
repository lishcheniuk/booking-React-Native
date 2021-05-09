import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../theme";
import { AppButton } from "./ui/AppButton";
import { SearchTextInput } from "./ui/SearchTextInput";

export const SearchView = ({ toScreen }) => {
  return (
    <View style={styles.search}>
      <Text style={styles.label}>Направление</Text>
      <SearchTextInput focus={() => toScreen("Search")} />

      <View style={styles.filter}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => toScreen("Date")}
          style={styles.filterItem}
        >
          <Text style={styles.label}>Даты</Text>
          <Text style={styles.filterValue}>25 мая - 28 мая</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.filterItem, styles.places]}
          onPress={() => toScreen("Places")}
        >
          <Text style={styles.label}>Количество номеров</Text>
          <Text style={styles.filterValue}>Гостей: 2, номеров: 1</Text>
        </TouchableOpacity>
      </View>
      <AppButton title="Поиск" click={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
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
