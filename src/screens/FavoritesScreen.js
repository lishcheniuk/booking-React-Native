import React from "react";
import { Image, View } from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { AppText } from "../components/ui/AppText";
import { AppTextBold } from "../components/ui/AppTextBold";
import { THEME } from "../theme";

export const FavoritesScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 15, flex: 1 }}>
      <AppTextBold style={{ fontSize: 26 }}>Ваши закладки</AppTextBold>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={require("../../assets/likes-folder-removebg-preview.png")}
          style={{ width: 200, height: 200 }}
        />
        <AppTextBold style={{ fontSize: 20, color: THEME.BLACK_COLOR }}>
          Добавьте это в избранное!
        </AppTextBold>
        <AppText
          style={{
            textAlign: "center",
            marginVertical: 20,
            width: "80%",
            color: THEME.BLACK_COLOR
          }}
        >
          Нажмите на значок, чтобы сохранить и сравнить Ваши избранные варианты
          здесь
        </AppText>
        <AppButton click={() => navigation.navigate("Home")}>
          Перейти в Поиск
        </AppButton>
      </View>
    </View>
  );
};
