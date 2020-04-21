import React, { Fragment } from 'react';

import './App.scss';

import Landing from './pages/landing/Landing';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Landing />
      </div>
    </Fragment>
  );
}

export default App;
