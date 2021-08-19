import React from 'react'
import { Container,Button } from 'reactstrap'
import Collapsable from '../components/Collapsable'
import '../styles/Match.css'
import Description from '../components/Description'
import axios from 'axios';


class Match extends React.Component{
    constructor(props) {
        super(props)
        this.state = { data: {},image:'',userId:Math.floor(Math.random() * 9999)};

     
        //Bind Methods
        this.Yes= this.Yes.bind(this)
        this.No= this.No.bind(this)
        this.addStock = this.addStock.bind(this);
        this.getStock = this.getStock.bind(this)
    }
    
    componentDidMount() {
        this.getStock();
    }   

    getStock(){
        // Sending a GET http request
        axios.get("https://stockpicker-mw11-12-back.herokuapp.com/getStockData")

            // After the request is complete we get a response. This method handles the response.
            .then((response) => {

                // Print the data to the console located in your web browser
                console.log(response.data);

                this.setState({
                    data: response.data,
                    image:response.data.image
                })
            })
    }

    Yes() {
        this.addStock()
    }
    No() {
        this.getStock()
    }

    addStock() {
        var body = {
            "userId":this.state.userId,
            "stock":this.state.data
        }

        axios.post("https://stockpicker-mw11-12-back.herokuapp.com/addStock", body)
            .then((response) => {
                alert('added')
                this.getStock();
                
            })
    }

    render(){
        return(
            <Container className="text-center pt">
                <Description data = {this.state.data}/>
                <div className="pt">
                    <Button color="danger"  onClick={this.No}>Sell</Button>
                    <Button color="success" className="ml"  onClick={this.Yes}>Hold</Button>
                </div>
                <Collapsable className="pt" userId={this.state.userId}/>
            </Container>
        )
    }
}

export default Match