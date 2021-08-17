import React from 'react';
import {Container } from 'reactstrap'
import ExplanationPage from '../components/Explanation';
import TeamComponent from '../components/TeamComponent';
import Features from '../components/Features';
import Tools from '../components/Tools';




function LandingPage() 
{
  return (

        <Container>
          <ExplanationPage/>
          <Features/>
          <Tools/>
          <TeamComponent/>
        </Container>

    );
}

export default LandingPage;
