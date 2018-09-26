import React, { Component } from "react";

export default class Player extends Component {
  constructor(name) {
    super(name);
    this.name = name;
  }
  printName() {
    console.log(this.name);
  }

  setName(name_) {
    this.name = name_;
  }
}
