import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';

//import { render } from '@testing-library/react';

class App extends Component {

// Standadise way to define state. Just an object. Modern practice uses ReactHook
state = {
  persons: [
    { name: 'a', age: 1},
    { name: 'b', age: 2},
    { name: 'c', age: 3}
  ],
  showPerson: false,
  otherState:'doesnt matter'
}

// Instance method
switchNameHandler = (newName) => {
  // Do not do this -> this.state.persons[0].name='x'
  // setState is a method from Component
  this.setState({
    persons: [
      { name: newName, age: 3},
      { name: 'b', age: 2},
      { name: 'c', age: 1}
    ]
  });
}

nameChangedHandler = (event) => {
  this.setState({
      persons: [
      { name: 'a', age: 3},
      { name: event.target.value, age: 2},
      { name: 'c', age: 1}
      ]
  })
}

// flip the state of showPerson
togglePersonHandler = () => {
  const doesShow = this.state.showPerson;
  this.setState({showPerson: !doesShow})
}

// return rendered jsx within (from React)
render() {
  // in-line style: styling in js without css
  const buttonStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if (this.state.showPerson){
    persons = (
        <div>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            change={this.nameChangedHandler}>
          </Person>

          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}>
          </Person>
        </div>
    )
  }



  return (
    <div className="App">
      <h1> This is a react app </h1>
      <p> Easy</p>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, 'a')}>
      </Person>

      {persons}
      
      <button style={buttonStyle} onClick={this.togglePersonHandler}>Toggle persons</button>
    </div>
  );
  // this is what happens in the background jsx(html in js) code above
  // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'this is a react app'));
}

}
export default App;
