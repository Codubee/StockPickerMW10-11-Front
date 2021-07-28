import React from 'react';
import Features from '../components/Features';
import Tools from '../components/Tools';
import ExplanationPage from '../components/Explanation';
import Buttons from '../components/Buttons';

function LandingPage() 
{
  return (
        <div>
            <ExplanationPage/>
            <Features></Features>
            <Tools/>
            <Buttons/>
        </div>
    )
}

export default LandingPage;
