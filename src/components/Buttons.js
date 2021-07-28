import React from 'react';
import { Button } from 'reactstrap';

const Btns = (props) => {
  return (
    <div>
      <Button color="danger" size= "lg">No</Button>{' '}
      <Button color="success" size= "lg">Yes</Button>{' '}
    </div>
  );
}

export default Btns;