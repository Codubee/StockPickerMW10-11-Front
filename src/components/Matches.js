import React from 'react';
import { Table } from 'reactstrap';

const Matches = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Company Name</th>
          <th>Symbol</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Apple</td>
          <td>aapl</td>
          <td>12.98</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Microsoft</td>
          <td>msft</td>
          <td>15.67</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Google</td>
          <td>ggle</td>
          <td>20.45</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Matches;
