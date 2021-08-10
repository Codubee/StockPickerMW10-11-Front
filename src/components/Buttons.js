import React from 'react';
import { Button } from 'reactstrap';

function Buttons(props){
  return (
    <div className="text-center">
      <Button color="danger" size= "lg">No</Button>{' '}
      <Button color="success" size= "lg">Yes</Button>{' '}
    </div>
  );
}

export default Buttons;