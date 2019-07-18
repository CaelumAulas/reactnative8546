import { AsyncStorage } from "react-native";
export const TokenManager = {
  getToken: async () => {
    return await AsyncStorage.getItem("TOKEN");
  },
  setToken: async token => {
    await AsyncStorage.setItem("TOKEN", token);
  }
};
