import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

function Features() {

    return (
        <div className="text-center">
            <h1>The following are the features of our application: </h1>

            <Row>
                <Col md="4">
                    <Card body outline color="secondary">
                        <CardTitle tag="h5">Stock Info</CardTitle>
                        <CardText>View stock info including stock name, price, and ticker name</CardText>
                    </Card>
                </Col>
                <Col>
                    <Card body outline color="secondary">
                        <CardTitle tag="h5">Select a stock</CardTitle>
                        <CardText>Select yes or no on a stock using buttons</CardText>
                    </Card>
                </Col>
                <Col>
                <Card body outline color="secondary">
                        <CardTitle tag="h5">View Matches</CardTitle>
                        <CardText>View what stocks you have selected</CardText>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Features;