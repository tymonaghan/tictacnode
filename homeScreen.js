import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,
  Button,
  Alert,
  TouchableHighlight,
  TextInput
} from "react-native";

import Title from "./Title";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };
  /*
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }
a button alert not currently used */

  render() {
    return (
      (
        <View style={styles.container}>
          <Title style={(justifyContent = "flex-Start")}>Tic Tac Toe</Title>
        </View>
      ),
      (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to Tic Tac Toe!</Text>
          <Image
            source={require("./titleImage.png")}
            style={{ width: 250, height: 250 }}
          />
          <TouchableHighlight
            onPress={this._onPressButton}
            underlayColor="yellow"
          >
            <View style={styles.buttonContainer}>
              <Button
                onPress={() => this.props.navigation.navigate("Setup")}
                title="Press to Start"
              />
            </View>
          </TouchableHighlight>
          <Text style={styles.normal}>This is the HomeScreen</Text>
        </View>
      )
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 20
  },
  title: {
    //flex: 1,
    alignItems: "center",
    fontSize: 40,
    justifyContent: "center"
  },
  normal: {
    fontSize: 14
  }
});
