// to use jsx, need to import React
import React from 'react'
import './Person.css';

//import Radium from 'radium'

// Another css library
//import styled from 'styled-components'


const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width: '450px'
    //     }
    // }
    return(
    <div className="Person">
        <p onClick={props.click}>
            Name: {props.name}, Age: {props.age}
        </p>
        <p>{props.children}</p>
        <input 
            type="text" 
            onChange={props.changed} 
            values={props.name}>
        </input>
    </div>

    );
}

export default person;