import React from "react";
import { StyleSheet, Animated, Text, View } from "react-native";
import { Marker } from "react-native-maps";
import { THEME } from "../theme";
import { AppTextBold } from "./ui/AppTextBold";

export const CustomMarker = ({ coordinate, price, click, scale }) => {
  return (
    <Marker coordinate={coordinate} onPress={click}>
      <Animated.View
        style={{
          transform: [
            {
              scale
            }
          ]
        }}
      >
        <View style={styles.bubble}>
          <AppTextBold style={styles.amount}>{price}</AppTextBold>
          <AppTextBold style={styles.dollar}>₴</AppTextBold>
        </View>

        <Animated.View style={styles.arrowBorder}></Animated.View>
      </Animated.View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  dollar: {
    color: "#fff",
    fontSize: 14
  },
  amount: {
    color: "#fff",
    fontSize: 13
  },
  bubble: {
    borderRadius: 4,
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 4,
    backgroundColor: THEME.GREY_COLOR
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 4,
    borderTopColor: THEME.GREY_COLOR, //D23F44
    alignSelf: "center"
  }
});
