import React from 'react';

import { Header } from './components/Header';
import { Progress } from './components/Progress';

import { Footer } from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Progress />
      <Footer />
    </div>
  );
}

export default App;
