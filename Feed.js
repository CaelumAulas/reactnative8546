// Components | State
import React, { Component } from "react";
// import { Component } from "react"; === const Component = React.Component
import { ScrollView, Text, TextInput, TouchableOpacity } from "react-native";
import CardPost from "./src/components/CardPost";
export default class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://instalura-api.herokuapp.com/api/public/fotos/rafael")
      .then(function(respostaDoServer) {
        return respostaDoServer.json();
      })
      .then(respostaConvertida => {
        this.setState({
          posts: respostaConvertida
        });
      });
  }
  // JSX === HTML
  render() {
    return (
      <ScrollView style={{ marginTop: 30 }}>
        {this.state.posts.map(function(post) {
          return <CardPost key={post.id} post={post} />;
        })}
      </ScrollView>
    );
  }
}
