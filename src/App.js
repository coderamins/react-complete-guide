import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm A Rect App !</h1>
        <p>This is really working !</p>
        <Person name="Ramin" age="28" />
        <Person name="Manu" age="29" >My Hobbies : Racing</Person>
        <Person name="Ali" age="26" />
      </div>
    );
    ///return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\'m A Rect App !'));
  }
}

export default App;
