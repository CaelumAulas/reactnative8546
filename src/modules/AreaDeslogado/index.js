import { LoginScreen } from "../Login";
import { createStackNavigator } from "react-navigation";

export const AreaDeslogado = createStackNavigator({
  Login: {
    screen: LoginScreen
  }
  // Cadastro
});
