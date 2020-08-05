import React, { Component } from 'react';

// ErrorBoundary is a component that wraps components to capture error from componnet
// Wrap ErrorBoundary around components you want to catch error
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    // error is passed into class object 
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>;
        } 
        else {
            return this.props.children;
        }
    }

}

export default ErrorBoundary