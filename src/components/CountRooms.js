import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { THEME } from "../theme";
import { AppText } from "./ui/AppText";

export const CountRooms = ({ count, set }) => {
  const colorMinus = count <= 1 ? THEME.GREY_COLOR : THEME.PRIMARY_COLOR;
  const colorPlus = count >= 4 ? THEME.GREY_COLOR : THEME.PRIMARY_COLOR;

  return (
    <View style={styles.countNumber}>
      <AppText style={{ fontSize: 17 }}>Номеров</AppText>
      <View style={styles.countControlWrap}>
        <TouchableOpacity
          style={[
            styles.btn,
            {
              borderColor: colorMinus
            }
          ]}
          activeOpacity={1}
          onPress={set.bind(null, -1)}
        >
          <AntDesign name="minus" size={19} color={colorMinus} />
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 15, fontSize: 18 }}>{count}</Text>
        <TouchableOpacity
          style={[
            styles.btn,
            {
              borderColor: colorPlus
            }
          ]}
          activeOpacity={1}
          onPress={set.bind(null, 1)}
        >
          <AntDesign name="plus" size={19} color={colorPlus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  countNumber: {
    borderRadius: 10,
    elevation: 5,
    margin: 15,
    padding: 15,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  countControlWrap: { flexDirection: "row", alignItems: "center" },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 22
  }
});
