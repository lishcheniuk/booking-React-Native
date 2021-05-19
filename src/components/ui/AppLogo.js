import React from "react";
import { Image, StyleSheet, View } from "react-native";

export const AppLogo = () => {
  return (
    <View style={styles.logoWrap}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoWrap: {
    height: 80,
    paddingVertical: 17,
    marginTop: 10,
    marginBottom: 20
  },
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: "100%"
  }
});
