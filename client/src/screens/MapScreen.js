import React, { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { CustomMarker } from "../components/CustomMarker";
import { THEME } from "../theme";

export const MapScreen = () => {
  const [color, setColor] = useState(true);

  function onRegionChange(region) {
    console.log(region);
  }

  return (
    <MapView
      style={styles.map}
      region={{
        latitude: 50.46109762315611,
        latitudeDelta: 0.022634400530591847,
        longitude: 30.518888141959906,
        longitudeDelta: 0.019999556243416095
      }}
      onRegionChange={onRegionChange}
    >
      <CustomMarker />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});

MapScreen.navigationOptions = () => {
  return {
    headerTitle: "Отели поблизости",
    headerTintColor: THEME.GREY_COLOR
  };
};
