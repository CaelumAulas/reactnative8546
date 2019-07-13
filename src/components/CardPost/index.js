import React, { Component } from "react";
import { View, Image, Text, Dimensions } from "react-native";
import { CardPostHeader } from "./CardPostHeader";
import { CardPostFooter } from "./CardPostFooter";
import PropTypes from "prop-types";

export default class CardPost extends Component {
  render() {
    const screenWidth = Dimensions.get("screen").width;
    const post = this.props.post;
    return (
      <View>
        <CardPostHeader imagem={post.urlPerfil} usuario={post.loginUsuario} />
        <Image
          style={{ width: screenWidth, height: screenWidth }}
          source={{ uri: post.urlFoto }}
        />
        <CardPostFooter />
      </View>
    );
  }
}

CardPost.propTypes = {
  post: PropTypes.shape({
    urlPerfil: PropTypes.string,
    loginUsuario: PropTypes.string,
    urlFoto: PropTypes.string
  }).isRequired
};

// 20 minutos, para criar o CardPostHeader o e CardPostFooter
// export const NomeDoComponent = function() { return (...) }
