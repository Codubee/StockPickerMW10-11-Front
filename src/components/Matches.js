import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { tsConstructorType } from '@babel/types';
class Matches extends React.Component{
  constructor(props) {
    super(props);
    this.apiTrigger = this.apiTrigger.bind(this);
  }
  apiTrigger() {
    axios.get("https://stockpicker-mw11-12-back.herokuapp.com/deleteStock?userId=99&stockId=1")
      
    .then((response) => {
          console.log(response.data); //Empty response, fill this with the ClickMe info!
    })
    
  } 
render() {
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
              <button onClick={this.apiTrigger}> Delete </button>
          </div>
        );
   }
}

export default Matches;
