import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Importa um botão
// Adiciona na view
// Aplica a ação
// Ativar a flag para dizer que o tweet foi likeado

export class CardPostFooter extends Component {
  state = {
    likeada: false,
    likers: [{ loginUsuario: "omariosouto" }]
  };

  render() {
    return (
      <View style={{ padding: 15 }}>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              likeada: !this.state.likeada
            });
          }}
          style={{
            backgroundColor: this.state.likeada ? "red" : "gray",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>
            {/* {this.state.likers.length}  */}
          </Text>
        </TouchableOpacity>
        <Text>Fotinha tirada na praia</Text>
      </View>
    );
  }
}
