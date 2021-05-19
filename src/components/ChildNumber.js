import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppText } from "./ui/AppText";
import { THEME } from "../theme";

export const ChildNumber = ({ places: count, set }) => {
  const colorMinus = count <= 0 ? THEME.GREY_COLOR : THEME.PRIMARY_COLOR;
  const colorPlus = count >= 4 ? THEME.GREY_COLOR : THEME.PRIMARY_COLOR;

  function clickHandler(mark) {
    const c = count + mark;
    if (c < 0 || c > 4) return false;
    set(mark, "child");
  }

  return (
    <View style={styles.countNumber}>
      <AppText style={{ fontSize: 17 }}>Детей</AppText>
      <View style={styles.countControlWrap}>
        <TouchableOpacity
          style={[
            styles.btn,
            {
              borderColor: colorMinus
            }
          ]}
          activeOpacity={1}
          onPress={clickHandler.bind(null, -1)}
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
          onPress={clickHandler.bind(null, 1)}
        >
          <AntDesign name="plus" size={19} color={colorPlus} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  countNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  countControlWrap: { flexDirection: "row", alignItems: "center" },
  countControl: {},
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 22
  }
});
