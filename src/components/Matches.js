import React from 'react';

function Matches(props){

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

export default Matches;
