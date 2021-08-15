import React from 'react';
import axios from 'axios';

class ApiCall extends React.Component {

  constructor(props) {
    super(props);

    this.state = { stocks: {} };
     this.triggerGetApi = this.triggerGetApi.bind(this);
     this.triggerPostApi = this.triggerPostApi.bind(this);
     this.triggerDeleteApi = this.triggerDeleteApi.bind(this);
  }
}

  function triggerGetApi() {

    axios.get("https://stockpicker-mw11-12-back.herokuapp.com/getMatches?userId=99")

        .then((response) => {

            console.log(response.data);

            this.setState({
                
                stocks: response.data
            })
        })
}

class Matches extends React.Component{

  render(){

  const stocks = [
    { company: "Apple", symbol: "appl", price: 12.98 },
    { company: "Microsoft", symbol: "msft", price: 15.98 },
    { company: "Google", symbol: "ggle", price: 20.50 }
]
  return (
          <div>
              <h1>Current Matches</h1>
              {
                  
                      stocks.map((matched, id) => (
                      <div key={id}>
                          <p>{matched.company}, {matched.symbol},{matched.price}</p>
                      </div>
                  ))
              }
          </div>

  );
}
}

export default Matches;

