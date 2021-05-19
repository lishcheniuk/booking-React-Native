import { useState } from "react";
import * as Location from "expo-location";

export const useLocation = () => {
  const [location, setLocation] = useState({
    longitude: 0,
    latitude: 0
  });
  const [errorMsg, setErrorMsg] = useState(null);

  async function getLocation() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return setErrorMsg("Permission to access location was denied");
      }
      let locationData = await Location.getCurrentPositionAsync();

      setLocation(locationData);
    } catch (error) {
      setLocation({
        //Центр Киев
        latitude: 50.45026601864754,
        longitude: 30.52352429041702
      });
    }
  }

  return {
    location,
    errorMsg,
    getLocation
  };
};
