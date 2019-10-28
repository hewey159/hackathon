import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import { FaArrowDown } from 'react-icons/fa';
import { BounceInDownDiv } from '../../Animations/BounceInDown'
class HomeHeader extends Component {

    
    render () {

        return (
            <div style={{margin: '15px'}}>
                    <BounceInDownDiv>
                        <Header style={{fontSize: '8em', marginTop: '30px'}} inverted color='red'>
                            Password Meter
                        </Header>
                    </BounceInDownDiv>
                    <Header style={{marginTop: '0px'}} as='h3' inverted color='grey'>
                        An offline tool, to check the stength of your password
                    </Header>
                    <FaArrowDown size='8em' />
            </div>

        )
    }
}


export default HomeHeader;