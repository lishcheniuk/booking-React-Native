import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AppText } from "./ui/AppText";
import { AppTextBold } from "./ui/AppTextBold";
import { AppButton } from "./ui/AppButton";
import { useMoment } from "../hooks/useMoment";

export const NearbyHotels = () => {
  const { currentDate } = useMoment();
  const navigation = useNavigation();
  const fromDate = currentDate.format("DD MMMM");
  const toDate = currentDate.clone().add(2, "day").format("DD MMMM");

  function toMapScreen() {
    navigation.navigate("Map", {
      from: fromDate,
      to: toDate,
      places: 2,
      rooms: 1
    });
  }

  return (
    <View style={{ marginTop: 50 }}>
      <AppTextBold style={{ fontSize: 26, margin: 15 }}>
        Ищете отель поблизости на сегодня?
      </AppTextBold>
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
              <AppTextBold style={{ margin: 0, color: "#fff", fontSize: 18 }}>
                Текущее местоположение
              </AppTextBold>
              <AppText style={{ color: "#fff", fontSize: 14 }}>
                {fromDate} - {toDate}
                &nbsp;&nbsp;&nbsp;Гостей: 2, номеров: 1
              </AppText>
            </View>
          </View>

          <AppButton click={toMapScreen}>Поиск отелей поблизости</AppButton>
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
