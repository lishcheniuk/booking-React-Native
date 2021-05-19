import AsyncStorage from "@react-native-async-storage/async-storage";

export const setData = async (name, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(name, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.log(e);
  }
};
