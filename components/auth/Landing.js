import React from "react";
import {
  Button,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import GlobalStyles from "../../GlobalStyles";

export default function Landing({ navigation }) {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <View style={{ flex: 1, justifyContent: "center", padding: 40 }}>
        <Button
          title="Register"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
        <TouchableHighlight style={{ marginTop: 20, marginBottom: 20 }}>
          <Button
            title="Login"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
