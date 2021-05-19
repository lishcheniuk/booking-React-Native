import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AppButton } from "../components/ui/AppButton";
import { AppLogo } from "../components/ui/AppLogo";
import { AppText } from "../components/ui/AppText";
import { AppTextBold } from "../components/ui/AppTextBold";
import { THEME } from "../theme";

export const SettingsAppScreen = () => {
  return (
    <View style={{ paddingHorizontal: 15 }}>
      <AppLogo />
      <AppTextBold
        style={{
          color: THEME.BLACK_COLOR,
          fontSize: 20,
          textAlign: "center"
        }}
      >
        Зарегистрированные пользователи trivago бронируют по специальным ценам.
        Вы тоже так можете.
      </AppTextBold>
      <AppButton
        click={() => {}}
        style={{ width: "40%", alignSelf: "center", marginTop: 20 }}
      >
        Зарегистрируйтесь
      </AppButton>

      <TouchableOpacity activeOpacity={0.8} style={styles.settingWrap}>
        <View>
          <AppTextBold style={styles.settingOption}>Язык</AppTextBold>
          <AppText style={styles.settingValue}>Русский язык, Россия</AppText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} style={styles.settingWrap}>
        <View>
          <AppTextBold style={styles.settingOption}>Валюта</AppTextBold>
          <AppText style={styles.settingValue}>UAH - грн.</AppText>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8} style={styles.settingWrap}>
        <View>
          <AppTextBold style={styles.settingOption}>
            Единицы измерения
          </AppTextBold>
          <AppText style={styles.settingValue}>Метрические, км</AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  settingWrap: {
    marginTop: 20
  },
  settingOption: {
    color: THEME.BLACK_COLOR,
    fontSize: 15
  },
  settingValue: {
    color: THEME.GREY_COLOR
  }
});
