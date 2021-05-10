import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { ScrollView, StyleSheet, View } from "react-native";
import { AddNumber } from "../components/AddNumber";
import { AppButton } from "../components/ui/AppButton";
import searchState from "../store/searchState";
import { CountRooms } from "../components/CountRooms";

export const SelectRoomsScreen = observer(({ navigation }) => {
  const [countRooms, setCountRooms] = useState(searchState.countRooms);
  const [rooms, setRooms] = useState(searchState.roomPlaces);

  function setCountRoomsHandler(mark) {
    const count = countRooms + mark;
    if (count < 1 || count > 4) return false;

    if (count < countRooms) {
      setRooms((prev) => {
        return Object.fromEntries(
          Object.entries(prev).filter(([key, _value]) => key != countRooms)
        );
      });
    } else
      setRooms((prev) => {
        return { ...prev, [count]: { adult: 2, child: 0 } };
      });

    setCountRooms(count);
  }

  function setRoomPlaces(number, type, roomIndex) {
    setRooms((prev) => {
      const value = prev[roomIndex][type] + number;
      return { ...prev, [roomIndex]: { ...prev[roomIndex], [type]: value } };
    });
  }

  function apply() {
    searchState.setRooms(rooms);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <CountRooms count={countRooms} set={setCountRoomsHandler} />

          {Array(countRooms)
            .fill("")
            .map((_, idx) => (
              <AddNumber
                key={idx}
                numberRoom={idx + 1}
                room={rooms[idx + 1]}
                set={(num, type) => setRoomPlaces(num, type, idx + 1)}
              />
            ))}
        </View>
      </ScrollView>
      <AppButton
        title="Применить"
        click={apply}
        style={{
          width: "80%",
          position: "absolute",
          bottom: 20,
          left: "10%"
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: { position: "relative", height: "100%", paddingBottom: 50 }
});
