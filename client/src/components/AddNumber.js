import React from "react";
import { StyleSheet, View } from "react-native";
import { AdultNumber } from "./AdultNumber";
import { ChildNumber } from "./ChildNumber";
import { AppTextBold } from "./ui/AppTextBold";

export const AddNumber = ({ room, set, numberRoom }) => {
  return (
    <View style={styles.container}>
      <AppTextBold style={{ textTransform: "uppercase", letterSpacing: 1.5 }}>
        Номер {numberRoom}
      </AppTextBold>

      <AdultNumber places={room.adult} set={set} />
      <ChildNumber places={room.child} set={set} />
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
