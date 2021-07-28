import './App.css';
import Navigation from './components/Navigation';
import LandingPage from './views/LandingPage';
import Matches from './components/Matches';

function App() {
  return (
    <div>
      <Navigation />
      <LandingPage />
      <Matches />
    </div>
      
  );
}

export default App;