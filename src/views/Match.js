import React from 'react'
import Buttons from '../components/Buttons'
import View from '../components/View'
import {Container} from 'reactstrap'
import Collapsable from '../components/Collapsable'

class Match extends React.Component {
    render() {
        return (
            <Container className="text-center">
                <View/>
                <Buttons />
                <Collapsable/>
            </Container>
        )
    }
}

export default Match