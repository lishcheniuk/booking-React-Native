import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AppText } from "./ui/AppText";
import { AppTitle } from "./ui/AppTitle";
import { AppButton } from "./ui/AppButton";

export const NearbyHotels = ({ toScreen }) => {
  return (
    <View style={{ marginTop: 50 }}>
      <AppTitle style={{ fontSize: 26, margin: 15 }}>
        Ищете отель поблизости на сегодня?
      </AppTitle>
      <ImageBackground
        source={require("../../assets/image2.jpg")}
        style={styles.imageBg}
      >
        <View style={styles.backdrop}>
          <View style={styles.info}>
            <MaterialCommunityIcons
              name="map-search-outline"
              size={34}
              color="#fff"
            />
            <View style={{ marginLeft: 25 }}>
              <AppTitle style={{ margin: 0, color: "#fff", fontSize: 18 }}>
                Текущее местоположение
              </AppTitle>
              <AppText style={{ color: "#fff", fontSize: 14 }}>
                7 мая - 9 мая &nbsp;&nbsp;Гостей: 2, номеров: 1
              </AppText>
            </View>
          </View>

          <AppButton
            title="Поиск отелей поблизости"
            click={() => toScreen("Map")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    width: "100%",
    resizeMode: "contain"
  },
  backdrop: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 20
  },
  info: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center"
  }
});
