import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";

export const LikeAnimation = React.forwardRef(({ change }, ref) => {
  return (
    <TouchableOpacity style={styles.container} onPress={change}>
      <LottieView
        ref={ref}
        source={require("../../assets/29384-favorite-heart.json")}
        loop={false}
        autoPlay={false}
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 40,
    height: 40,
    borderRadius: 25,
    overflow: "hidden"
  }
});
