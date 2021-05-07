import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";

export const MainScreen = () => {
  const [value, setValue] = useState("");
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {}, []);

  function scrollHandler(event) {
    if (event.nativeEvent.contentOffset >= 50 && !isFixed) {
      console.log("fixed");
      setFixed(true);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      stickyHeaderIndices={[1]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageWrap}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>

      <View style={styles.search}>
        <Text style={styles.label}>Направление</Text>
        <TextInput
          style={styles.input}
          placeholder="Введите пункт назначения"
          placeholderTextColor="rgb(130, 130, 130)"
          value={value}
          onChangeText={(val) => setValue(val)}
        />
        <View style={styles.filter}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {}}
            style={styles.filterItem}
          >
            <Text style={styles.label}>Даты</Text>
            <Text style={styles.filterValue}>25 мая - 28 мая</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.filterItem, styles.places]}
          >
            <Text style={styles.label}>Количество номеров</Text>
            <Text style={styles.filterValue}>Гостей: 2, номеров: 1</Text>
          </TouchableOpacity>
        </View>
        <Button title="Поиск" color="#06BCEE" />
      </View>

      {Array(50)
        .fill("")
        .map((_, idx) => (
          <Text key={idx + 1}>{`Text ${idx + 1}`}</Text>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  search: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 5,
    elevation: 5
  },
  input: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    color: "#000",
    borderRadius: 40,
    backgroundColor: "rgba(130, 130, 130, 0.4)",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 3
  },
  imageWrap: {
    height: 80,
    paddingVertical: 17,
    marginTop: 10
  },
  logo: {
    resizeMode: "contain",
    width: "100%",
    height: "100%"
  },
  filter: {
    flexDirection: "row",
    marginVertical: 20,
    paddingVertical: 8,
    borderTopColor: "rgba(130, 130, 130, 0.4)",
    borderTopWidth: 0.5,
    borderBottomColor: "rgba(130, 130, 130, 0.4)",
    borderBottomWidth: 0.5
  },
  filterItem: {
    flexGrow: 1
  },
  places: {
    paddingLeft: 15,
    borderLeftColor: "rgba(130, 130, 130, 0.4)",
    borderLeftWidth: 0.5
  },
  label: {
    color: "rgb(130, 130, 130)",
    fontSize: 12
  },
  filterValue: {
    fontSize: 16
  }
});
