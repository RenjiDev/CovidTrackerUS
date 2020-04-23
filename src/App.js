import React, { Fragment } from 'react';

import './App.scss';

import HeatmapState from './context/heatmap/HeatmapState';

import Landing from './pages/landing/Landing';

const App = () => {
  return (
    <HeatmapState>
      <Fragment>
        <div className="container">
          <Landing />
        </div>
      </Fragment>
    </HeatmapState>
  );
};

export default App;
