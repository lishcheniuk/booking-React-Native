import React from "react";
import { StyleSheet, View } from "react-native";
import { AddAdultNumber } from "./AddAdultNumber";
import { AddChildNumber } from "./AddChildNumber";
import { AppTitle } from "./ui/AppTitle";

export const AddNumber = ({ idx }) => {
  return (
    <View style={styles.container}>
      <AppTitle style={{ textTransform: "uppercase", letterSpacing: 1.5 }}>
        Номер {idx}
      </AppTitle>

      <AddAdultNumber />
      <AddChildNumber />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 15,
    backgroundColor: "#fff"
  }
});
