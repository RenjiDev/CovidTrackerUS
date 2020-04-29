import React, { useContext, useEffect } from 'react';
import './styles.scss';
import USMap from '../../components/heatmap/USMap';
import MapListItem from '../../components/heatmap/MapListItem';
import SearchBar from '../../components/heatmap/SearchBar';

import HeatmapContext from '../../context/heatmap/heatmapContext';

const Heatmap = () => {
  const heatmapContext = useContext(HeatmapContext);
  const { getStateData, loading, states } = heatmapContext;

  useEffect(() => {
    getStateData();
    //eslint-disable-next-line
  }, []);
  return loading ? null : (
    <div className="heatmap-container">
      <div className="heatmap-title-mobile">
        <span>
          <img
            src={require('../../assets/fire.svg')}
            className="heatmap-title-icon"
          />
          <h1>Heatmap</h1>
        </span>
        <h2>United States of America</h2>
      </div>

      <div className="heatmap-map-container">
        <USMap />
      </div>
      <div className="heatmap-states-list-container">
        <span>
          <img
            src={require('../../assets/fire.svg')}
            className="heatmap-title-icon"
          />
          <h1>Heatmap</h1>
        </span>
        <h2>United States of America</h2>

        <SearchBar />
        {states.map((state) => (
          <MapListItem
            name={state.state}
            total={state.positive.toLocaleString()}
          />
        ))}
      </div>
    </div>
  );
};

export default Heatmap;
