import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { THEME } from "../theme";
import { AppHotelRate } from "./ui/AppHotelRate";

export const RecentViewerCard = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.hotel}
      onPress={() => {}}
    >
      <ImageBackground
        source={require("../../assets/barcelona.jpg")}
        resizeMode="cover"
        style={styles.hotelBg}
      >
        <View style={styles.hotelRate}>
          <AppHotelRate hotel="Aloft Kiev" rate="9.1" country="KIEV" />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.close}
          onPress={() => {}}
        >
          <AntDesign name="close" size={16} color="#fff" />
        </TouchableOpacity>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hotel: {
    width: 250,
    height: 120,
    marginLeft: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: THEME.GREY_COLOR_LIGHT,
    overflow: "hidden"
  },
  hotelBg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    position: "relative"
  },
  hotelRate: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5
  },
  close: {
    borderRadius: 15,
    backgroundColor: THEME.GREY_COLOR,
    position: "absolute",
    top: 3,
    right: 3,
    padding: 2
  }
});
