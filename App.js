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

//export default App;

class HomeScreen extends Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  render() {
    //let pic = {
  //    uri:
  //      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/675px-Tic_tac_toe.svg.png"
  //  };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Tic Tac Toe!</Text>
        <Image source={require('./titleImage.png')} style={{ width: 250, height: 250 }} />
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
    );
  }
}

class GameplayScreen extends Component {
  render(){
    return(
      <View style={styles.container}>
      </View>
    );
  }
}

class DetailsScreen extends Component {
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
              onPress={this._onPressButton}
              title="Ready!"
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Setup: DetailsScreen,
    Play: GameplayScreen
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

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
