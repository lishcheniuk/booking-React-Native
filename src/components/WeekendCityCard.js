import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { THEME } from "../theme";
import { AppButton } from "./ui/AppButton";
import { AppText } from "./ui/AppText";
import { AppTextBold } from "./ui/AppTextBold";
import { WeekendHotelCard } from "./WeekendHotelCard";

export const WeekendCityCard = () => {
  return (
    <View style={styles.weekendCity}>
      <AppTextBold style={{ fontSize: 18 }}>Гомель, Беларусь</AppTextBold>
      <AppText style={{ color: THEME.BLACK_COLOR }}>224км от Вас</AppText>

      <View style={{ marginTop: 20 }}>
        <AppTextBold
          style={{ textTransform: "uppercase", color: THEME.BLACK_COLOR }}
        >
          Отели и другое жилье
        </AppTextBold>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={300}
        >
          <WeekendHotelCard />
        </ScrollView>
      </View>
      <AppButton
        colorText={THEME.PRIMARY_COLOR}
        align="right"
        style={{ backgroundColor: "transparent", marginTop: 10 }}
        click={() => {}}
      >
        Показать еще варианты &#5171;
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  weekendCity: {
    margin: 15,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 5,
    padding: 15
  }
});
