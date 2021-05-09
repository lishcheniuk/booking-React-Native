import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { AppText } from "../components/ui/AppText";
import { THEME } from "../theme";
import { AddNumber } from "../components/AddNumber";
import { AppButton } from "../components/ui/AppButton";

export const PlacesScreen = () => {
  const [count, setCount] = useState(1);

  const colorMinus = count <= 1 ? THEME.GREY_COLOR : THEME.PRIMARY_COLOR;
  const colorPlus = count >= 4 ? THEME.GREY_COLOR : THEME.PRIMARY_COLOR;

  function clickHandler(mark) {
    const c = count + mark;
    if (c < 1 || c > 4) return false;
    setCount(c);
  }

  return (
    <View style={{ position: "relative", height: "100%", paddingBottom: 50 }}>
      <ScrollView>
        <View>
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
                onPress={clickHandler.bind(null, -1)}
              >
                <AntDesign name="minus" size={19} color={colorMinus} />
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 15, fontSize: 18 }}>
                {count}
              </Text>
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

          {Array(count)
            .fill("")
            .map((_, idx) => (
              <AddNumber key={idx} idx={idx + 1} />
            ))}
        </View>
      </ScrollView>
      <AppButton
        title="Применить"
        click={() => console.log(123)}
        style={{
          width: "80%",
          position: "absolute",
          bottom: 20,
          left: "10%"
        }}
      />
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
  countControl: {},
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 22
  }
});

PlacesScreen.navigationOptions = () => ({
  headerTitle: "Номера и гости",
  headerTintColor: THEME.GREY_COLOR
});
