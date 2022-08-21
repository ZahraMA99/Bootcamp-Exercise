import Spam from "./Spam";
import React, { Component } from "react";

class Spamalot extends Component {
  render() {
    let spam = [];
    for (let i = 0; i < 500; i++) {
      spam.push(<Spam />);
    }

    return spam;
  }
}

export default Spamalot;
