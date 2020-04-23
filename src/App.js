import React, { Fragment } from 'react';

import './App.scss';

import HeatmapState from './context/heatmap/HeatmapState';
import CountryState from './context/country/CountryState';

import Landing from './pages/landing/Landing';

const App = () => {
  return (
    <CountryState>
      <HeatmapState>
        <Fragment>
          <div className="container">
            <Landing />
          </div>
        </Fragment>
      </HeatmapState>
    </CountryState>
  );
};

export default App;
