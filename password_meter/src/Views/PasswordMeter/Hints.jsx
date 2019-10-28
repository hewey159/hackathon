import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

// helper functions 
import { containsNumber } from '../../Functions/ContainsNumber'
import { containsSymbol } from '../../Functions/ContainsSymbol'
import { containsUpperCase } from '../../Functions/ConatinsUpperCase'

// hints for the password, e.g. should contain uppercases
class Hints extends Component {
    constructor(props){
        super(props)
        this.state = {
            hints: {symbol: false, upperCase: false, number: false}
        }
    }

    // this is the function that renders the hints
    renderHints = (password) => {
        let hintsRender = []
        if(!containsNumber(password)){
            hintsRender.push(
                <Header key='containsNumber' style={{fontSize: '1.5em'}} inverted color={this.props.color} >
                    Include a Number
                </Header>
            )
        }
        if(!containsSymbol(password)){
            hintsRender.push(
                <Header key='containsSymbol' style={{fontSize: '1.5em'}} inverted color={this.props.color} >
                    Include a Symbol
                </Header>
            )
        }
        if(!containsUpperCase(password)){
            hintsRender.push(
                <Header key='conatinsUpperCase' style={{fontSize: '1.5em'}} inverted color={this.props.color} >
                    Include an Upper Case Letter
                </Header>
            )
        }
        return hintsRender
    }

    render () {
        return (
            <div>
                {this.renderHints(this.props.password)}
            </div>

        )
    }
}


export default Hints;