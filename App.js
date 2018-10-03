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
  TextInput,
  ImageBackground
} from "react-native";
import { createStackNavigator } from "react-navigation";
import Title from "./Title";

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

export class Player extends Component {
  constructor(name, turn) {
    super(name, turn);
    this.name = name;
    this.turn = turn;
  }
  printName() {
    console.log(this.name);
  }

  setName(name_) {
    this.name = name_;
  }
}
const player1 = new Player((name = "playa1"), (turn = true));

const player2 = new Player((name = "p2"), (turn = false));
//let isPlayerOnesTurn = true;

export class GameLogic extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlayerOnesTurn: true };
  } //end constructor

  _togglePlayerTurn() {
    this.setState = { isPlayerOnesTurn: !previousState.isPlayerOnesTurn };
  } //end _togglePlayerTurn
} //end GameLogic class

export class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };
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
            source={require("./data/titleImage.png")}
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
          <Text style={styles.normal}>This is the HomeScreen, ass</Text>
        </View>
      )
    );
  }
}

export class SetupScreen extends Component {
  constructor(props) {
    //constructor for props
    super(props); //not sure what this does
    this.state = { text: "" }; //set the 'text' to blank
  }
  _onPressButton() {}

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
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              player1.setName(this.state.text);
              this.props.navigation.navigate("Gameplay");
            }}
            title="Ready!"
          />
        </View>
      </View>
    );
  } // end render
} //end setupScreen class

export class GameplayScreen extends Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
    player1.printName();
    {
      //  gameLogic._togglePlayerTurn;
    }
  } //end _onPressButton

  _onPressButton2() {
    Alert.alert("You tapped the second button!");
    player1.setName("Rickaye"); //this isn't triggering a redraw like I want it to
    player1.printName();
  } //end onPressButton2

  _onPressButton3() {
    player1.setState.turn(false);
    player2.setState.turn(true);
  } //end _onPressButton3

  render() {
    let buttonColor = "#ffaa22";

    //  let turn = {gameLogic.state.isPlayerOnesTurn};
    //let turn = "{gameLogic._togglePlayerTurn}"; //figure out how to assign this based on the gameLogic.isPlayerOnesTurn
    //i think the plan is going to be one whole-screen flexbox, with row0, row1, and row2 flexboxes columned inside it
    return (
      <View style={styles.container2}>
        <ImageBackground
          source={require("./data/gridLines.png")}
          style={{ width: "100%", height: "80%" }}
        >
          <View style={styles.row}>
            <Button
              onPress={this._onPressButton}
              title="1"
              color={buttonColor}
            />
            <Button onPress={this._onPressButton2} title="2" />
            <Button onPress={this._onPressButton3} title="3" />
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
        <View
          style={{
            width: "100%",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <Text>{player1.name}</Text>
          <Text>{player2.name}</Text>
        </View>
        <View
          style={{
            width: "100%",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <Text>{player1.turn.toString()}</Text>
          <Text>{player2.turn.toString()}</Text>
        </View>
        {/* the {turn} does print the string i assigned to it, so just need to find a way to have it pull the "isPlayerOnesTurn" out of gameLogic */}
      </View>
    );
  } //end GameplayScreen render
} //end GameplayScreen

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Setup: SetupScreen,
    Gameplay: GameplayScreen
  },
  {
    initialRouteName: "Gameplay"
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
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly"
    //  alignContent: "stretch"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 20
    //height: 30
    //  width: 30,
    //  margin:10
  }
});
