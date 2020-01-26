import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  state = {
    persons: [
      { name: "George", age: "28" },
      { name: "Lee", age: "28" },
      { name: "Karen", age: "28" }
    ]
  }

  switchNameHandler = (newName) => {
    //don't do thios this.state.persons[1].name = "Fadzai";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Fadzai", age: 28 },
        { name: "Thomas", age: 28 }
      ]
    })
  }


  nameChangeHandler = (event) => {
    //don't do thios this.state.persons[1].name = "Fadzai";
    this.setState({
      persons: [
        { name: "George", age: 28 },
        { name: event.target.value, age: 28 },
        { name: "Thomas", age: 28 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style}
          onClick={this.switchNameHandler.bind(this, "Kapoya")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Maidei")}
          changed={this.nameChangeHandler.bind()} >My Hobbies: Soccer</Person>


        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }

}

export default App;
