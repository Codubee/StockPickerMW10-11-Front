import React from 'react'
import Buttons from '../components/Buttons'
import View from '../components/View'
import {Container} from 'reactstrap'
import Collapsable from '../components/Collapsable'
import StockData from '../components/StockData'

class Match extends React.Component {
    render() {
        return (
            <Container className="text-center">
                <View/>
                <Buttons />
                <Collapsable/>
                <StockData></StockData>
            </Container>
        )
    }
}

export default Match