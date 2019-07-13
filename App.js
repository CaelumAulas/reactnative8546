import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

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
});

const SistemaDeNavegacaoDaNossaApzinhaShow = AreaLogado;

export default createAppContainer(SistemaDeNavegacaoDaNossaApzinhaShow);
