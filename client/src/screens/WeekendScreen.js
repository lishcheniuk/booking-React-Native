import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppText } from "../components/ui/AppText";
import { THEME } from "../theme";
import { WeekendCityCard } from "../components/WeekendCityCard";

export const WeekendScreen = () => {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/weekend.jpg")}
        style={{ height: 230, justifyContent: "flex-end" }}
      >
        <AppTextBold style={styles.title}>
          Что Вы делаете в эти{" "}
          <Text style={{ color: "#ff9d00" }}>выходные</Text>?
        </AppTextBold>
      </ImageBackground>
      <TouchableHighlight
        underlayColor={THEME.GREY_COLOR_LIGHT}
        activeOpacity={0.95}
        onPress={() => {}}
        style={styles.locationHighlight}
      >
        <View style={styles.locationWrap}>
          <Ionicons name="location-outline" size={28} color={"#000"} />
          <View style={{ marginLeft: 20 }}>
            <AppText style={{ color: THEME.BLACK_COLOR, fontSize: 12 }}>
              Текущий город
            </AppText>
            <AppTextBold style={{ fontSize: 16 }}>Рядом с Вами</AppTextBold>
          </View>
        </View>
      </TouchableHighlight>

      <WeekendCityCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: { color: "#fff", fontSize: 30, marginLeft: 20, marginBottom: 50 },
  locationHighlight: {
    marginHorizontal: 25,
    height: 70,
    borderRadius: 70,
    borderWidth: 0.5,
    elevation: 5,
    borderColor: THEME.GREY_COLOR_LIGHT,
    marginTop: -35,
    marginBottom: 10,
    overflow: "hidden"
  },
  locationWrap: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 30
  }
});
