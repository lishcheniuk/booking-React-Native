import React from "react";
import { StyleSheet, Animated, Text } from "react-native";
import { Marker } from "react-native-maps";

export const CustomMarker = () => {
  return (
    <Marker
      coordinate={{
        latitude: 50.46126788110566,
        longitude: 30.525431798980875
      }}
    >
      <Animated.View>
        <Animated.View style={styles.bubble}>
          <Text style={styles.amount}>1100</Text>
          <Text style={styles.dollar}>₴</Text>
        </Animated.View>

        <Animated.View style={styles.arrowBorder}></Animated.View>
        <Animated.View style={styles.arrow}></Animated.View>
      </Animated.View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  dollar: {
    color: "#fff",
    fontSize: 11
  },
  amount: {
    color: "#fff",
    fontSize: 13
  },
  bubble: {
    flexDirection: "row",
    backgroundColor: "#FF5A5F",
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 3,
    borderColor: "#D23F44",
    borderWidth: 0.5
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 4,
    borderTopColor: "#D23F44",
    alignSelf: "center",
    marginTop: -0.5
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 4,
    borderTopColor: "#FF5A5F",
    alignSelf: "center",
    marginTop: -9
  }
});
