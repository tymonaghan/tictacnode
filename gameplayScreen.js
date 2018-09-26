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

import gameLogic from "./gameLogic";
import Player from "./playerClass";

//import isPlayerOnesTurn from "./GameLogic";
//^this isn't working, I'm not sure how to treat isPlayerOnesTurn as a variable that can be accessed from elsewhere

const player1 = new Player('playa1')
const player2 = new Player('p2')

export default class GameplayScreen extends Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
    let buttonColor = '#ffaa22';
    player1.printName();
    {gameLogic._togglePlayerTurn}
  }

  render() {
  //  let turn = {gameLogic.state.isPlayerOnesTurn};
  let turn = '{gameLogic._togglePlayerTurn}'; //figure out how to assign this based on the gameLogic.isPlayerOnesTurn
  let buttonColor = '#cccccc';
    //i think the plan is going to be one whole-screen flexbox, with row0, row1, and row2 flexboxes columned inside it
    return (
      <View style={styles.container2}>
        <ImageBackground source={require("./gridLines.png")} style={{ width: "100%", height: "80%" }}>
          <View style={styles.row}>
            <Button onPress={this._onPressButton} title="1" color={buttonColor} />
            <Button onPress={this._onPressButton} title="2" />
            <Button onPress={this._onPressButton} title="3" />
          </View>
          <View style={styles.row}>
            <Button onPress={this._onPressButton} title="4" />
            <Button onPress={this._onPressButton} title="5" />
            <Button onPress={this._onPressButton} title="6" />
          </View>
          <View style={styles.row}>
            <Button onPress={this._onPressButton} title="7" />
            <Button onPress={this._onPressButton} title="8" />
            <Button onPress={this._onPressButton} title="9" />
          </View>
        </ImageBackground>
        <Text>hey{turn}</Text>
        {/* the {turn} does print the string i assigned to it, so just need to find a way to have it pull the "isPlayerOnesTurn" out of gameLogic */}
      </View>
    );
  } //end render
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  //  alignContent: "stretch"
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
  },
  row: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical:20,
    //height: 30
    //  width: 30,
    //  margin:10
  }
});
