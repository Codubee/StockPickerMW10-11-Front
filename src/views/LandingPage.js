import React from 'react';
import Tools from '../components/Tools';
import Features from '../components/Features';
import Tools from '../components/Tools';
import ExplanationPage from '../components/Explanation';


function LandingPage() 
{
  return (
        <div>
            <ExplanationPage/>
            <Features></Features>
            <Tools/>
        </div>
    )
}

export default LandingPage;
