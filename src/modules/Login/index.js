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
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import InstaelumService from "../../services/InstaelumService";
import { FormBuilder } from "../../components/FormBuilder";

// Usem com cautela: https://pt-br.reactjs.org/docs/hooks-intro.html
export class LoginScreen extends React.Component {
  state = {
    login: "rafael",
    senha: "123456",
    fields: []
  };

  handleChange = nomeDoCampo => {
    return valorDoCampo => {
      this.setState({ [nomeDoCampo]: valorDoCampo });
    };
  };

  // Chamada de API
  // Acesso ao async storage
  // Token
  //
  handleUserLogin = () => {
    InstaelumService.login({ senha: this.state.senha, login: this.state.login })
      .then(() => {
        alert("Deu certo");
      })
      .catch(err => {
        alert("Aconteceu algum bug");
      });
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <FormBuilder
          fields={[
            {
              id: 1,
              name: "login",
              label: "Login",
              type: "text",
              value: "",
              syncValidators: [
                ["required", {}, "Esse campo é obrigatório"],
                ["minlength", { min: 3 }, "Preencha ao menos 3 caracteres"]
              ]
            },
            {
              id: 3,
              name: "nome",
              label: "Nome",
              type: "text",
              value: "",
              syncValidators: [
                ["required", {}, "Esse campo é obrigatório"],
                ["minlength", { min: 3 }, "Preencha ao menos 3 caracteres"]
              ]
            },
            {
              id: 2,
              name: "idade",
              label: "Idade",
              type: "number",
              value: "",
              syncValidators: [["required", {}, "Esse campo é obrigatório"]]
            }
          ]}
        />
      </KeyboardAvoidingView>
      // <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      //   <Text style={styles.title}>Instaelum</Text>
      //   {this.state.fields.length === 0 ? <ActivityIndicator /> : null}
      //   {this.state.fields.map(field => {
      //     return (
      //       <TextInput
      //         key={field.id}
      //         onChangeText={this.handleChange(field.slug)}
      //         style={styles.formTextField}
      //         placeholder={field.title}
      //         secureTextEntry={field.type === "password" ? true : false}
      //       />
      //     );
      //   })}
      //   <TouchableOpacity onPress={this.handleUserLogin} style={styles.btn}>
      //     <Text style={styles.textColor}>Logar</Text>
      //   </TouchableOpacity>
      // </KeyboardAvoidingView>
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
