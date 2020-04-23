import React, { Fragment, useEffect } from 'react';

import './App.scss';

import HeatMapState from './context/heatmap/HeatmapState';

import Landing from './pages/landing/Landing';

const App = () => {
  return (
    <HeatMapState>
      <Fragment>
        <div className="container">
          <Landing />
        </div>
      </Fragment>
    </HeatMapState>
  );
};

export default App;
