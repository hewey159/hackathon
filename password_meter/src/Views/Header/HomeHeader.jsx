import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import { FaArrowDown } from 'react-icons/fa';
import { BounceInDownDiv } from '../../Animations/BounceInDown'

// header for the home page, basically the instructions
class HomeHeader extends Component {
    render () {
        return (
            <div style={{margin: '15px'}}>
                {/* animation */}
                <BounceInDownDiv style={{animationDuration: '0.8s', animationFillMode: 'both'}}>

                    {/* Headers */}
                    <Header style={{fontSize: '8em', marginTop: '30px'}} inverted color='red'>
                        Password Meter
                    </Header>
                    <Header style={{marginTop: '0px'}} as='h3' inverted color='grey'>
                        An offline tool, to check the stength of your password
                    </Header>

                    {/* arrow */}
                    <FaArrowDown size='8em' />

                </BounceInDownDiv>
            </div>

        )
    }
}


export default HomeHeader;