import React from 'react';
import Tools from '../components/Tools';
import Features from '../components/Features';
import ExplanationPage from '../components/Explanation';
import CanCollapse from '../components/canCollapse';

function LandingPage() 
{
  return (
        <div>
            <ExplanationPage/>
            <Features></Features>
            <CanCollapse></CanCollapse>
            <Tools/>
        </div>
  )
}

export default LandingPage;
