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
import { createStackNavigator } from "react-navigation";

import SetupScreen from "./setupScreen";
import GameplayScreen from "./gameplayScreen";
import HomeScreen from "./homeScreen";
import GameLogic from "./gameLogic";

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Setup: SetupScreen,
    Gameplay: GameplayScreen
  },
  {
    initialRouteName: "Home"
  }
);

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
