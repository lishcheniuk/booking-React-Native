import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import moment from "moment";
import { AppNavigation } from "./src/navigation/AppNavigation";
import searchState from "./src/store/searchState";
import { getData } from "./src/libs/localStorage";

export default function App() {
  const [fontsLoaded] = useFonts({
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf")
  });

  useEffect(() => {
    getData("dates").then((data) => {
      if (data) {
        const { dates, renderMonth } = data;

        const d = { from: moment(dates.from), to: moment(dates.to) };
        searchState.selectDates(d);
        searchState.setRenderListMonth(renderMonth);
      }
    });
    getData("rooms").then((data) => {
      if (data) searchState.setRooms(data);
    });
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <AppNavigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(249, 249, 249)",
    paddingTop: 30
  }
});
