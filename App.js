import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { AreaDeslogado } from "./src/modules/AreaDeslogado";

class FeedScreen extends Component {
  static navigationOptions = {
    title: "Instaelum"
  };

  render() {
    return (
      <View>
        <Text>Tela de feed</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("FeedStackPostInterno")}
        />
      </View>
    );
  }
}

const PerfilScreen = props => (
  <View>
    <Text>Perfil</Text>
    <Button
      title="Go to Details"
      onPress={() => props.navigation.navigate("FeedStackHome")}
    />
  </View>
);

const PostInterno = props => (
  <View>
    <Text>Página interna</Text>
    <Button
      title="Go to Details"
      onPress={() => props.navigation.navigate("FeedStackHome")}
    />
  </View>
);

const FeedStack = createStackNavigator({
  FeedStackHome: {
    screen: FeedScreen
  },
  FeedStackPostInterno: {
    screen: PostInterno
  }
});

const PerfilStack = createStackNavigator({
  PerfilStackHome: {
    screen: PerfilScreen
  }
});

const AreaLogado = createBottomTabNavigator({
  Feed: {
    screen: FeedStack
  },
  Perfil: {
    screen: PerfilStack
  }
  // logout
});

class AuthScreen extends React.Component {
  state = { ready: false };
  componentDidMount() {
    setTimeout(() => {
      // Roda qualquer coisa async aqui
      const hasUserToken = false;
      this.setState({ ready: true }, () => {
        this.props.navigation.navigate(hasUserToken ? "Logado" : "Deslogado");
      });
    }, 500);
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Carregando...</Text>
      </View>
    );
  }
}
const SistemaDeNavegacaoDaNossaApzinhaShow = createSwitchNavigator(
  {
    Auth: AuthScreen,
    Deslogado: AreaDeslogado,
    Logado: AreaLogado
  },
  { initialRouteName: "Auth" }
);

export default createAppContainer(SistemaDeNavegacaoDaNossaApzinhaShow);
