import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { THEME } from "../theme";
import { AppHotelRate } from "./ui/AppHotelRate";
import { AppText } from "./ui/AppText";
import { AppTextBold } from "./ui/AppTextBold";

const window = Dimensions.get("window");

export const WeekendHotelCard = () => {
  return (
    <View style={styles.weekendHotel}>
      <Image
        source={{
          uri: "https://static.readytotrip.com/upload/information_system_24/4/3/7/item_437716/photo_25575840.jpg"
        }}
        style={{ width: "30%", height: "100%" }}
      />
      <View style={{ width: "70%", padding: 10 }}>
        <AppHotelRate
          hotel="Nice Appartaments"
          rate="7.5"
          country="Частный дом / Квартира"
          color={THEME.BLACK_COLOR}
        />
        <AppText
          style={{
            color: THEME.BLACK_COLOR,
            marginVertical: 7
          }}
        >
          21 мая - 23 мая
        </AppText>

        <View
          style={{
            borderTopWidth: 1,
            borderColor: THEME.GREY_COLOR_LIGHT,
            paddingVertical: 10
          }}
        >
          <AppTextBold
            style={{
              fontSize: 16,
              color: "#10ba35"
            }}
          >
            619 UAH
          </AppTextBold>
          <AppText style={{ fontSize: 12 }}>в сутки</AppText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weekendHotel: {
    flexDirection: "row",
    marginTop: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: THEME.GREY_COLOR,
    borderRadius: 5,
    width: window.width - 150,
    height: 150
  }
});
