import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { AppTextBold } from "./AppTextBold";

export const AppHotelRate = ({ color = "#fff", hotel, rate, country }) => {
  return (
    <>
      <Text style={[styles.title, { color }]} numberOfLines={1}>
        {hotel}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <AppTextBold style={styles.rate}>{rate}</AppTextBold>
        <AppTextBold style={[styles.text, { color }]}> {country}</AppTextBold>
      </View>
    </>
  );
};

AppHotelRate.propTypes = {
  color: PropTypes.string,
  hotel: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: "roboto-bold"
  },
  rate: {
    color: "#fff",
    borderRadius: 10,
    backgroundColor: "#10ba35",
    paddingHorizontal: 5,
    overflow: "hidden",
    fontSize: 12
  },
  text: {
    fontSize: 12
  }
});
