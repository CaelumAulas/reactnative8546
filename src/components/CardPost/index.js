import React, { Component } from "react";
import { View, Image, Text, Dimensions } from "react-native";

export default class CardPost extends Component {
  render() {
    const screenWidth = Dimensions.get("screen").width;
    const item = this.props.post;
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: 15
          }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 }}
            source={{ uri: item.imagem }}
          />
          <Text style={{ paddingLeft: 15 }}>{`@${item.usuario}`}</Text>
        </View>
        <Image
          style={{ width: screenWidth, height: screenWidth }}
          source={{ uri: item.imagem }}
        />
        <Text style={{ padding: 15 }}>Fotinha tirada na praia</Text>
      </View>
    );
  }
}
