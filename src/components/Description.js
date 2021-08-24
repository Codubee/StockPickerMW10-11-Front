import React from 'react'
import { Container, Spinner, Table } from 'reactstrap'
import { Card, CardTitle, CardText } from 'reactstrap'
import '../styles/Description.css'

function Description(props) {

    if (props.data.currentPrice) {
        return (
            <Container>
                <Card body outline color="secondary">
                    <CardTitle tag="h5">{props.data.companyName} - {props.data.symbol} </CardTitle>
                    <CardText>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Previous Day Price</th>
                                    <th>Current Price</th>
                                    <th>Change</th>
                                    <th>High of Day</th>
                                    <th>Low of Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th >{props.data.previousClosePrice}</th>
                                    <th >{props.data.currentPrice}</th>
                                    <th className={props.data.change >= 0 ? 'green-text' : 'red-text' }>{props.data.change}</th>
                                    <th >{props.data.highPriceOfDay}</th>
                                    <th >{props.data.lowPriceOfDay}</th>
                                </tr>
                            </tbody>
                        </Table>
                    </CardText>
                </Card>

            </Container>
        )
    }
    else {
        return <Spinner></Spinner>
    }
}

export default Description