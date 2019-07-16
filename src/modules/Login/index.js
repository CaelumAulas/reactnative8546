// 1 - Migrar o AreaDeslogado para a pasta dentro de Modules
// 2 - migrar o componente do login e importalo dentro do AreDeslogado
// 3 - Coda isso
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";

// Usem com cautela: https://pt-br.reactjs.org/docs/hooks-intro.html
export class LoginScreen extends React.Component {
  state = {
    login: "",
    senha: "",
    fields: []
  };

  componentDidMount() {
    const fields = [
      {
        id: 1,
        slug: "login",
        title: "Usuário",
        type: "text",
        syncValidators: []
      },
      {
        id: 2,
        slug: "senha",
        title: "Senha",
        type: "password",
        syncValidators: []
      }
    ];

    setTimeout(() => {
      this.setState({ fields });
    }, 2000);
  }

  // http://dontpad.com/bagulhos
  handleChange = nomeDoCampo => {
    return valorDoCampo => {
      this.setState({ [nomeDoCampo]: valorDoCampo });
    };
  };

  handleUserLogin = () => {
    console.warn(this.state);
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.title}>Instaelum</Text>
        {this.state.fields.length === 0 ? <ActivityIndicator /> : null}
        {this.state.fields.map(field => {
          return (
            <TextInput
              key={field.id}
              onChangeText={this.handleChange(field.slug)}
              style={styles.formTextField}
              placeholder={field.title}
              secureTextEntry={field.type === "password" ? true : false}
            />
          );
        })}

        {/* <TextInput
          style={styles.formTextField}
          onChangeText={this.handleChange("senha")}
          placeholder="Senha"
          secureTextEntry={true}
        /> */}
        <TouchableOpacity onPress={this.handleUserLogin} style={styles.btn}>
          <Text style={styles.textColor}>Logar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
LoginScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  btn: {
    backgroundColor: "#3095f3",
    borderRadius: 10,
    padding: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  },
  textColor: {
    color: "#fff",
    fontSize: 15
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50
  },
  formTextField: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#666",
    alignSelf: "stretch",
    marginBottom: 15
  }
});
