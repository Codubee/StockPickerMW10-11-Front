import React from 'react'
import Buttons from '../components/Buttons'
import View from '../components/View'
import Matches from '../components/Matches'
import {Container} from 'reactstrap'

class Match extends React.Component {
    render() {
        return (
            <Container className="text-center">
                <View/>
                <Buttons />
                <Matches />
            </Container>
        )
    }
}

export default Match