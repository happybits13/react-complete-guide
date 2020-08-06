import React, {Component} from 'react';
import './App.css';
// Method 3 of applying css
//import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'
import AuthContext from '../context/auth-context';

// This is a css library that allows more advance features for style objects
// StyleRoot is to allow advanced css features (media queries) for style objects
//import Radium, { StyleRoot } from 'radium'; 

// Another css library
//import styled from 'styled-components'

//import { render } from '@testing-library/react';

class App extends Component {

static contextType = AuthContext;

// Standadise way to define state. Just an object. Modern practice uses ReactHook
state = {
  persons: [
    { id: 1, name: 'a', age: 1},
    { id: 2, name: 'b', age: 2},
    { id: 3, name: 'c', age: 3}
  ],
  showPerson: false,
  otherState:'doesnt matter'
}

//============
// Component creation lifecycle hook (Only avil in class component, not functional)
//============
// constructor(props) -> Call super(props), set up state
// getDerivedStateFromProps(props, state) -> Sync state to props
// render -> prepare and structure jsx code. this is below
//*** componentDidMount() -> Side effects. code that is not within this file

// ============
// Component update lifecycle hook(Only avail in class Component, not functional)
// ============

// 1) Lifecycle hook purpose: Sync state to props
static getDerivedStateFromProps(props, state){
  // this lifecycle hook sets class state from return-ed state
  console.log('[App.js] getDerivedStateFromProps');
  return state;
}

// 2) Lifecycle hook purpose: Decide whether to continue lifecycle or not
// ***
shouldComponentUpdate(nextProps, nextState){
  // this lifecycle hook must return a true false to indicate to proceed or stop lifecycle
  console.log('[App.js] shouldComponentUpdate');
  
  return true;
  // Eg of usage
  // if (nextProps.persons !== this.state.persons){
  //   return true;
  // }
  // else{
  //   return false;
  // }
}

// 3) Lifecycle hook purpose: Last minute DOM ops (post render)
// getSnapshotBeforeUpdate(prevProps, prevState){

// }


// 4) Lifecycle hook purpose: render jsx
// render()


// 5) Lifecycle hook purpose: Cause side effect. Other code not within this file
componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}





// Lifecycle hook purpose: Prepare and structure jsx code
// render(){
// return(
    //some jsx code. this hook alrdy defined below
//   )
// }






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

nameChangedHandler = (event, id) => {
  // search through whole list and return index is function matches
  const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
  });

  // assign person object from state to person
  // ... best practice. Does not assign to pointer
  //const person = {...this.state.persons[personIndex]};
  // also decent practice
  const person = Object.assign({}, this.state.persons[personIndex]);

  //const person = {id: 1, name: 'a', age: 1};

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  // first parameter will take from the state. second is what you want to set
  this.setState( {persons: persons} );
  // setState can take in object or function
  // optional way of writing (Fxn): This is better if you are referencing states in setState
  // this.setState((prevState,props) => {
  //   return {persons:persons}
  // });
}

// flip the state of showPerson
togglePersonHandler = () => {
  const doesShow = this.state.showPerson;
  this.setState({showPerson: !doesShow});
}

deletePersonHandler = (personsIndex) => {
  // Bad practice. Because just referencing pointer. Making change directly to array
  //const persons = this.state.persons;
  // Good practice 1
  //const persons = this.state.persons.slice();
  // Good practice 2
  const persons = [...this.state.persons];


  persons.splice(personsIndex , 1);
  this.setState({persons: persons});
}

loginHandler = () => {
  this.setState({authenticated: true});
}



// return rendered jsx within (from React)
render() {
// this.context.authenticated = false;
// this.context.login = this.loginHandler;

  console.log('Render')
  // in-line style: styling in js without css
  const buttonStyle = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  let persons = null;

  // Toggle show and not show
  if (this.state.showPerson){
    // Map list to components
    persons = (
      <div>
        <Persons
          isAuth={this.state.authenticated}
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}>
        </Persons>
      </div>
    )
    buttonStyle.backgroundColor = 'red';
    buttonStyle[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }
  }

  let paraClasses = [];
  if (this.state.persons.length < 3)
    paraClasses.push('red');
  if (this.state.persons.length < 2)
    paraClasses.push('bold');
  
  // convert ['red', 'bold'] to 'red bold'
  paraClasses = paraClasses.join(' ');

  return (

    //<StyleRoot>
    <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>

    
      <div className="App">
        <Cockpit
          title = {this.props.appTitle}
          classes = {paraClasses}
          buttonStyle = {buttonStyle}
          clicked = {this.togglePersonHandler}
        />
      
      {persons}
      </div>
    </AuthContext.Provider>
   //</StyleRoot>
  );
  // this is what happens in the background jsx(html in js) code above
  // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'this is a react app'));
}

}

// Radium is a css library. allow sudo selectors in style object for React
export default App;
