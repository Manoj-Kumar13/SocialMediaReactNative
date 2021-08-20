import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import firebase from "firebase";
import { SafeAreaView } from "react-native";
import GlobalStyles from "../../GlobalStyles";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
      });
  }

  render() {
    return (
      // <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={(name) => this.setState({ name })}
        />
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
        <View style={styles.button}>
          <Button
            onPress={() => {
              this.onSignUp();
            }}
            title="SignUp"
          />
        </View>
      </View>
      // </SafeAreaView>
    );
  }
}
export default Register;

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
