import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { validations } from "../infra/validations";

export class FormBuilder extends Component {
  state = {
    fields: [],
    errors: {}
    // login: [
    //   { type: "required", message: "Você precisa preencher isso" },
    //   { type: "minlength", message: "Você precisa colocar X caracteres" }
    // ]
  };

  setFields = () => {
    this.setState({
      fields: this.props.fields
    });
  };

  componentDidMount() {
    this.setFields();
  }

  handleChange = fieldName => {
    return novoValor => {
      // console.warn("Valor que foi digitado: ", novoValor);
      const currentField = this.state.fields.find(field => {
        return field.name === fieldName;
      });

      this.validateField(currentField, novoValor);
    };
  };

  getAllValues = () => {
    // [Array de algo] .map [Array de outra coisa] (com mesmo numero itens)
    // [Array de algo] .reduce Qualquer dado
    return this.state.fields.reduce((dadoFinal, item) => {
      dadoFinal[item.name] = item.value;
      return dadoFinal;
    }, {}); // { login: omariosouto }
  };

  validateField = (currentField, novoValor) => {
    const fieldName = currentField.name;
    const errors = [];
    currentField.syncValidators.forEach(syncValidator => {
      const validatorType = syncValidator[0]; // required, minlength
      const validatorData = syncValidator[1];
      const validatorMessage = syncValidator[2];
      const isInvalidResult = validations[validatorType](
        novoValor,
        validatorData
      );
      if (isInvalidResult)
        errors.push({ type: validatorType, message: validatorMessage });
    });

    return new Promise(resolve => {
      this.setState(
        prevState => ({
          fields: prevState.fields.map(field => {
            if (field.name === fieldName) return { ...field, value: novoValor };
            return field;
          }),
          errors: { ...prevState.errors, [fieldName]: errors }
        }),
        () => {
          resolve(true);
        }
      );
    });
  };

  handleFormBuilderSubmit = () => {
    const validationsPromises = this.state.fields.map(field => {
      return this.validateField(field, field.value);
    });

    Promise.all(validationsPromises).then(() => {
      const errors = this.state.errors;
      const isAllFieldsValid = (isValid = Object.keys(errors).reduce(
        (isValid, errorKey) => {
          console.log(errorKey, errors[errorKey]);
          if (errors[errorKey].length > 0) return false;
          return isValid;
        },
        true
      ));

      if (isAllFieldsValid) {
        console.warn("onSuccess");
        this.props.onSuccess && this.props.onSuccess(this.getAllValues());
      } else {
        console.warn("onError", errors);
      }
    });
  };

  render() {
    return (
      <View>
        {this.state.fields.map(field => {
          const fieldErrors = this.state.errors[field.name] || [];
          return (
            <View key={field.id}>
              <TextInputSpot
                label={field.label}
                valor={field.value}
                onChangeText={this.handleChange(field.name)}
              />
              <Text>{JSON.stringify(fieldErrors)}</Text>
              {fieldErrors.map(erroDoField => {
                return (
                  // Para gerar ID dinamicamente no meio do código:
                  // - https://www.npmjs.com/package/uuid
                  <Text key={erroDoField.message}>- {erroDoField.message}</Text>
                );
              })}
            </View>
          );
        })}
        <TouchableOpacity
          style={{ backgroundColor: "black", padding: 15, borderRadius: 10 }}
          onPress={this.handleFormBuilderSubmit}
        >
          <Text style={{ color: "white" }}>Esse é o botão de cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const TextInputSpot = props => {
  // Procura no google: Desestruturação de objeto - MDN
  return (
    <View>
      <Text>
        {props.label}: {props.valor}
      </Text>
      <TextInput
        style={TextInputSpotStyle.textInput}
        value={props.valor}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const TextInputSpotStyle = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#666",
    alignSelf: "stretch",
    marginBottom: 15
  }
});
