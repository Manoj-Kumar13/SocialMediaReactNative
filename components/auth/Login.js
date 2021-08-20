import React, { Component } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import firebase from "firebase";
import { SafeAreaView } from "react-native";
import GlobalStyles from "../../GlobalStyles";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <SafeAreaView style={GlobalStyles.droidSafeArea}>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="email"
            textContentType="emailAddress"
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
          <TouchableHighlight style={styles.button}>
            <Button
              onPress={() => {
                this.onLogin();
              }}
              title="Login"
            />
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  textInput: {
    height: 50,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  button: {
    padding: 50,
    marginBottom: 100,
  },
});
