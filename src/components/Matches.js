import React from 'react';
import { Button } from 'reactstrap'

class Matches extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const stocks = [
      { company: "Apple", symbol: "appl", price: 12.98 },
      { company: "Microsoft", symbol: "msft", price: 15.98 },
      { company: "Google", symbol: "ggle", price: 20.50 }
    ]
    return (
      <div >
        <table className="text-center" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Symbol</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {

            stocks.map((matched, id) => (
              <tr key={id}>
                <td>{matched.company}</td>
                <td>{matched.symbol}</td>
                <td>{matched.price}</td>
                <td><Button size="sm">Delete</Button></td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Matches;
