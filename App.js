// Components | State
import React, { Component } from "react";
// import { Component } from "react"; === const Component = React.Component
import { Dimensions, Text, View, ScrollView, Image } from "react-native";
import CardPost from "./src/components/CardPost";
export default class App extends Component {
  // JSX === HTML
  render() {
    // import { Dimensions, Text, View, Image } from "react-native";

    const posts = [
      {
        id: 1,
        imagem: "http://placehold.it/1000x1000",
        descricao: "Fotinha tirada na praia",
        usuario: "omariosouto"
      },
      {
        id: 2,
        imagem: "http://placehold.it/1000x1000",
        descricao: "Fotinha tirada na praia",
        usuario: "artdiniz"
      }
    ];

    return (
      <ScrollView style={{ marginTop: 30 }}>
        {posts.map(function(item) {
          return <CardPost key={item.id} post={item} />;
        })}
      </ScrollView>
    );
  }
}
