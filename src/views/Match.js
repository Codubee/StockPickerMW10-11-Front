import React from 'react'
import Buttons from '../components/Buttons'
import View from '../components/View'
import Matches from '../components/Matches'

class Match extends React.Component {
    render() {
        return (
            <div>
                <View/>
                <Buttons />
                <Matches />
            </div>
        )
    }
}

export default Match