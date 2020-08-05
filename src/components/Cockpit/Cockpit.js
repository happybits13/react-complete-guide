import React, { useEffect } from 'react';

const Cockpit = (props) => {

    // this happens after every render
    useEffect(() => {
        console.log('happen all time eventHook');
        // this only occurs on 2nd effectHook onwards
        return () => {
            console.log('Before useEffect Hook (2nd useEffect onwards)');
        }
    });

    // this happens after first render. 
    useEffect(() => {
        console.log('1 time useEffect hook');
    },[]);

    // this happens after first render. and whenever props change subsequently
    useEffect(() => {
        console.log('props useEffect hook');
    },[props.title])

    return(
    <div>
        <h1> {props.title} </h1>
        <p className={props.classes}>Easy</p>
        <button style={props.buttonStyle} onClick={props.clicked}>Toggle persons</button>
    </div>
    );
}

export default Cockpit;
