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

export default class SetupScreen extends Component {
  constructor(props) {
    //constructor for props
    super(props); //not sure what this does
    this.state = { text: "" }; //set the 'text' to blank
  }

  _onPressButton() {
    Alert.alert("Insert gameplay here");
  }

  render() {
    return (
      <View style={styles.container}>
        {/* this container fills the screen */}
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          {/* then this container goes inside, but its content will be at the "start" of the flexbox */}
          <Text style={styles.title}>Player Setup</Text>

          <TextInput //allows user to type their name
            style={{ width: 250, height: 50 }}
            placeholder="Type your name here"
            onChangeText={text => this.setState({ text })} // when the text changes, updates this.text by setting its State}
          />
          <Text style={styles.normal}>{this.state.text}</Text>
        </View>
        <TouchableHighlight
          onPress={this._onPressButton}
          underlayColor="yellow"
        >
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => this.props.navigation.navigate("Gameplay")}
              title="Ready!"
            />
          </View>
        </TouchableHighlight>
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
