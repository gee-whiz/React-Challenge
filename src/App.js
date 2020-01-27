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


  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });

  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    let classes = []
    if (this, this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }


    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>Thsi is Realy working!</p>
        <button style={style}
          onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }

}

export default App;
