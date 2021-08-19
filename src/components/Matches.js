import React from 'react';
import { Button } from 'reactstrap'
import axios from 'axios'

class Matches extends React.Component {

  constructor(props) {
    super(props)
    this.apiTrigger = this.apiTrigger.bind(this);
  }

  apiTrigger(stockId) {
    console.log(stockId)
    axios.delete("https://stockpicker-mw11-12-back.herokuapp.com/deleteStock?userId=" + this.props.userId + "&stockId=" + stockId)
      .then((response) => {
        alert('Deleted. Please refresh by clicking the matces button again')
      })
      .catch((err) => {
        alert('Not deleted')
      })

  }

  render() {

    if (this.props.matches) {
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

                this.props.matches.map((matched, id) => (
                  <tr key={id}>
                    <td>{matched.companyName}</td>
                    <td>{matched.symbol}</td>
                    <td>{matched.currentPrice}</td>
                    <td><Button size="sm" onClick={()=>this.apiTrigger(matched.stockId)}>Delete</Button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      );
    }
    else
      return <h3>No matches yet</h3>
  }
}

export default Matches;
