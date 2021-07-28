import React from 'react';
import {Container } from 'reactstrap'
import ExplanationPage from '../components/Explanation';
import TeamComponent from '../components/TeamComponent';
function LandingPage() 
{
  return (

        <Container>
          <ExplanationPage/>
          <TeamComponent/>
        </Container>

    );
}

export default LandingPage;
