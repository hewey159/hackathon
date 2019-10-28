import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

class WordEntropy extends Component {
    constructor(props){
        super(props)
        this.state = {
            valueToPlainText: {weak: 0, low: 20, gettingThere: 40, good: 60, excellent: 80 },
        }
    }

    calculateEntropyAsPlainText(entropy){
        if(entropy > this.state.valueToPlainText.excellent) return "Excellent"
        if(entropy > this.state.valueToPlainText.good) return "Good"
        if(entropy > this.state.valueToPlainText.gettingThere) return "Getting Better"
        if(entropy > this.state.valueToPlainText.low) return "Low"
        if(entropy > this.state.valueToPlainText.weak) return "Weak"

        return "Input Password"
        // nothing inputted
    }

    render () {
        return (
            <div>
                <Header style={{ padding: '5px', fontSize: '1em'}} inverted color={this.props.color} >
                   {this.calculateEntropyAsPlainText(this.props.entropy)}
                </Header>
            </div>

        )
    }
}


export default WordEntropy;