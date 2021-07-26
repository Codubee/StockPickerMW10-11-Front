import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

function ExplanationPage() {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Stock Picker</h1>
          <p className="lead">Our stock picker application will show the user
          one stock at a time with details about each stock, such as related
          articles on it's performance. The user will then have the choice to choose whether 
          to swipe right to favorite the stock or swipe left to decline it. After they made their decision, 
          a new stock will appear and the user will be greeted with the same options and so forth.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default ExplanationPage;