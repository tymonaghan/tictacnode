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

//import isPlayerOnesTurn from "./GameLogic";
//^this isn't working, I'm not sure how to treat isPlayerOnesTurn as a variable that can be accessed from elsewhere

export default class GameplayScreen extends Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  render() {
    //i think the plan is going to be one whole-screen flexbox, with row0, row1, and row2 flexboxes columned inside it
    return (
      <View style={styles.container2}>
        <ImageBackground
          source={require("./gridLines.png")}
          style={{ width: "100%", height: "80%" }}
        >
          <View style={styles.row}>
            <Button onPress={this._onPressButton} title="1" />
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
      </View>
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
  container2: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly"
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
    //flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    //  margin:15
    height: 30
    //  width: 30,
    //  margin:10
  }
});
