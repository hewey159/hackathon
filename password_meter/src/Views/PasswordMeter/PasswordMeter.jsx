import React, { Component } from 'react';
import { Progress, Segment, Header } from 'semantic-ui-react'
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import Hints from './Hints'
import WordEntropy from "./WordEntropy"

// styling
import './passwordMeter.css'
import { BounceInLeftDiv } from '../../Animations/BounceInLeft'
import { BounceInUpDiv } from '../../Animations/BounceInUp'

// functions we need to implement
import { calculateEntropy } from '../../Functions/CalculateEntropy'
import { claculateTimeToCrack } from '../../Functions/ClaculateTimeToCrack'

// password meter, contains the meter for disaplying the entropy of a password
class PasswordMeter extends Component {
    constructor(props){
        super(props)
        this.state = {
            password: "",    //current password entered by user
            entropy: 0,      //current entropy calculated using the password
            valueToColor: {red: 0, yellow: 20, green: 80 }, // for red colour entropy has to be greater than 0, yellow greater than 20, etc.
            timeToCrack: "10 Seconds",                      //time it takes to crack the password                       
            hints: {symbol: false, upperCase: false, number: false}, //hints to make a stronger password
            color: 'grey',   //color of entropy, grey means no input
            hiddenPassword: true,
            inputType: 'password'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    // runs when the password changes (i.e. when we need to calculate a new entropy)
    handleChange(event){
        let password = event.target.value

        // calaculate the entropy
        let entropy = calculateEntropy(password)

        // calculate the color to show users
        let color = this.getColor(entropy)

        // retursn the amount of time it would take to crack it
        let timeToCrack = claculateTimeToCrack(password)

        // set the new values
        this.setState({ password, entropy, color, timeToCrack })
    }

    // converts the entropy to a color
    getColor(entropy){
        if(entropy > this.state.valueToColor.green) return 'green'
        if(entropy > this.state.valueToColor.yellow) return 'yellow'
        if(entropy > this.state.valueToColor.red) return 'red'
        
        // nothing inputted
        return 'grey'
    }

    renderEye(floatPosition){
        if(this.state.hiddenPassword){
            if(this.state.inputType == 'text') this.setState({inputType: 'password'})
            return <FaEyeSlash style={{float: floatPosition}} onClick={() => this.setState({hiddenPassword: false})}  size='8em' />
        }else{
            if(this.state.inputType == 'password') this.setState({inputType: 'text'})
            return <FaEye style={{float: floatPosition}} onClick={() => this.setState({hiddenPassword: true})}  size='8em' />
        }
    }

    render () {

        return (
            <div style={{width: '100%'}}>
                {/* animation */}
                <BounceInLeftDiv style={{animationDelay: "0.6s", animationFillMode: 'both'}}>
                
                {/* input a password */}
                    <Segment style={{paddingTop: '-10px', marginTop: '-15px'}} input inverted padded>
                        {this.renderEye('left')}
                        <input style={{width: '70%'}} type={this.state.inputType} onChange={this.handleChange} placeholder='Enter a Password...' />
                        
                        {this.renderEye('right')}
                    </Segment>
                
                </BounceInLeftDiv>

                {/* spacing */}
                <br />

                {/* animation */}
                <BounceInUpDiv style={{animationDuration: "1.2s", animationDelay: "0.8s", animationFillMode: 'both'}}>

                    {/* progress bar to show the cureent strength */}
                    <Progress
                        color={this.state.color}
                        percent={this.state.entropy}
                        inverted 
                        style={{margin: 'auto', width: '40%'}}
                        size='big'
                    >
                        <WordEntropy color={this.state.color} entropy={this.state.entropy} />
                    </Progress>
                    
                    {/* spacing */}
                    <br />

                    {/* Hints for better password */}
                    <Header style={{fontSize: '2em'}} inverted color='blue' >
                        Enhance your password by:
                    </Header>
                    <Hints color='blue' password={this.state.password} />
                    
                    {/* time to crack password */}
                    <Header style={{fontSize: '2em'}} inverted color='red' >
                        This would take: {this.state.timeToCrack} for an attacker to crack
                    </Header>

                </BounceInUpDiv>
            </div>

        )
    }
}


export default PasswordMeter;