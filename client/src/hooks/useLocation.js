import { useState } from "react";
import * as Location from "expo-location";

export const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    //let location = await Location.getCurrentPositionAsync();
    setLocation({
      latitude: 50.442685313547294,
      longitude: 30.627086490240988
    });
  }

  return {
    location,
    errorMsg,
    getLocation
  };
};
