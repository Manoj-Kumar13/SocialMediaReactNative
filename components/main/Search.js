import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import firebase from "firebase";

require("firebase/firestore");

export default function Search(props) {
  const [users, setUsers] = useState([]);

  const fetchUsers = (search) => {
    firebase
      .firestore()
      .collection("users")
      .where("name", ">=", search)
      .get()
      .then((snapshot) => {
        let users = snapshot.docs.map((user) => {
          const data = user.data();
          const id = user.id;
          return { id, ...data };
        });
        setUsers(users);
      });
  };
  return (
    <View>
      <TextInput
        style={styles.text}
        placeholder="Search"
        onChangeText={(search) => {
          console.log(users);
          return fetchUsers(search);
        }}
      />
      <View style={styles.listContainer}>
        <FlatList
          numColumns={1}
          horizontal={false}
          data={users}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() =>
                props.navigation.navigate("Profile", { uid: item.id })
              }
            >
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 5,
  },
  listContainer: {
    marginTop: 20,
    padding: 15,
  },
  listItem: {
    height: 50,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
