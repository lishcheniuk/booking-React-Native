import React from "react";
import { StyleSheet, Animated, Text, View } from "react-native";
import { Marker } from "react-native-maps";
import { THEME } from "../theme";

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
        <Animated.View
          style={[styles.bubble, { backgroundColor: THEME.GREY_COLOR }]}
        >
          <Text style={styles.amount}>{price}</Text>
          <Text style={styles.dollar}>₴</Text>
        </Animated.View>

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
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 3,
    flexDirection: "row",
    borderColor: THEME.GREY_COLOR, //D23F44
    borderWidth: 0.5
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 4,
    borderTopColor: THEME.GREY_COLOR, //D23F44
    alignSelf: "center",
    marginTop: -0.5
  }
});
