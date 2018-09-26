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
  ImageBackground
} from "react-native";

export default class GameLogic extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlayerOnesTurn: true };
  } //end constructor

  _togglePlayerTurn() {
    this.setState = { isPlayerOnesTurn: !previousState.isPlayerOnesTurn };
  } //end _togglePlayerTurn
} //end GameLogic class

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
