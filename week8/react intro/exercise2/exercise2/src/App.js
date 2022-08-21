import React, { Component } from "react";
import "./App.css";

class App extends Component {
  getClassName(temperature) {
    if(temperature < 15) {  
      return "freezing"
    } else if(temperature >= 15 && temperature < 30) {
      return "fair"      
    } else {
      return "hell-scape"
    } 
  }

render() {
 return (
 <div className="ex-space">
          <div className="exercise" id="ex-2">
          <div id="weatherBox" className={this.getClassName(9)}></div>
          <div id="weatherBox" className={this.getClassName(22)}></div>
          <div id="weatherBox" className={this.getClassName(45)}></div>
          </div>
        </div>)
  
}
}
export default App;
