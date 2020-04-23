import React, { Fragment, useEffect } from 'react';

import './App.scss';

import Landing from './pages/landing/Landing';

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <Landing />
      </div>
    </Fragment>
  );
};

export default App;
