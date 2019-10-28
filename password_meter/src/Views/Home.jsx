import React, { Component } from 'react';
import HomeHeader from './Header/HomeHeader';
import PasswordMeter from './PasswordMeter/PasswordMeter';
class Home extends Component {

    render () {

        return (
            <div>
                <HomeHeader />
                <PasswordMeter />
            </div>

        )
    }
}


export default Home;