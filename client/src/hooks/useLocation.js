import { useState } from "react";
import * as Location from "expo-location";

export const useLocation = () => {
  const [location, setLocation] = useState({
    longitude: 0,
    latitude: 0
  });
  const [errorMsg, setErrorMsg] = useState(null);

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    //let locationData = await Location.getCurrentPositionAsync();

    setLocation({
      latitude: 50.45936014726068,
      longitude: 30.518023187179242
    });
  }

  return {
    location,
    errorMsg,
    getLocation
  };
};
