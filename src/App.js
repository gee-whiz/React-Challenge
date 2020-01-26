import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';



class App extends Component {
  state = {
    persons: [
      { id: "01", name: "George", age: "28" },
      { id: "02", name: "Lee", age: "28" },
      { id: "03", name: "Karen", age: "28" }

    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })

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

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });

  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} age={person.age}
              key={person.id}
            />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }

}

export default App;
