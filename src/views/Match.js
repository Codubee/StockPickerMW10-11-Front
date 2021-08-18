import React from 'react'
import View from '../components/View'
import { Container,Button } from 'reactstrap'
import Collapsable from '../components/Collapsable'
import axios from 'axios'

class Match extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [],image:''};

    }

    componentDidMount() {

        // Sending a GET http request
        axios.get("https://stockpicker-mw11-12-back.herokuapp.com/getStockData")

            // After the request is complete we get a response. This method handles the response.
            .then((response) => {

                // Print the data to the console located in your web browser
                console.log(response.data);

                this.setState({
                    data: response.data

                })
            })
    }


    render() {
        return (
            <Container className="text-center">
                <View  />
                <div className="text-center">
                    <Button color="danger" size="lg">No</Button>{' '}
                    <Button color="success" size="lg">Yes</Button>{' '}
                </div>
                <Collapsable />
            </Container>
        )
    }
}

export default Match