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

export default class GameplayScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("./gridLines.png")}
          style={{ width: "100%", height: "80%" }}
        >
          <Text>hey</Text>
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
