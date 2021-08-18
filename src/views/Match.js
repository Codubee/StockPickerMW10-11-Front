import React from 'react'
import View from '../components/View'
import { Container,Button } from 'reactstrap'
import Collapsable from '../components/Collapsable'
import '../styles/Match.css'
import Description from '../components/Description'
import axios from 'axios';

class Match extends React.Component{
    constructor(props) {
        super(props)
        //Setting a default value
        super(props);
        this.state = { data: [],image:''};
     
        //Bind Methods
        this.Yes= this.Yes.bind(this)
        this.No= this.No.bind(this)
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

    Yes() {
        alert('clicked yes')
    }
    No() {
        alert('clicked no')
    }


    render(){
        return(
            <Container className="text-center">
                <View className="pt"/>
                <Description data = {this.state.data}/>
                <div className="pt">
                    <Button color="danger"  onClick={this.No}>No</Button>
                    <Button color="success"  onClick={this.Yes}>Yes</Button>
                </div>
                <Collapsable className="pt"/>
            </Container>
        )
    }
}

export default Match