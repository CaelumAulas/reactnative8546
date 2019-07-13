import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
export const CardPostHeader = function(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.userAvatar} source={{ uri: props.imagem }} />
      <Text style={styles.userLogin}>{`@${props.usuario}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15
  },
  userAvatar: { width: 50, height: 50, borderRadius: 50 },
  userLogin: { paddingLeft: 15 }
});

// npm install prop-types
CardPostHeader.propTypes = {
  imagem: PropTypes.string.isRequired,
  usuario: PropTypes.string.isRequired
};
