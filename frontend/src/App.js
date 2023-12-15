import logo from './logo.svg';
import './App.css';

import React from 'react';
import WelcomeText from './components/pages/Welcome';
import LoanCalculator from './components/LoanCalculator';

function App() {
  return (
      <div className="App">
          <main>
              <WelcomeText />
              <LoanCalculator />
          </main>
      </div>
  );
}

export default App;
