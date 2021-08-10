import React from 'react';
import Features from '../components/Features';
import Tools from '../components/Tools';
import ExplanationPage from '../components/Explanation';
import ButtonClick from '../components/ButtonClick';




function LandingPage() 
{
  return (
        <div>
            <ExplanationPage/>
            <Features></Features>
            <ButtonClick/>
        </div>
    )
}

export default LandingPage;
