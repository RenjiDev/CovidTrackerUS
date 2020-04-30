import React, { useContext, useEffect } from 'react';

import HeatmapContext from '../../context/heatmap/heatmapContext';

import { geoCentroid } from 'd3-geo';
import Fade from 'react-reveal';

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from 'react-simple-maps';

import allStates from '../../config/allstates.json';

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';
const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

const USMap = () => {
  const heatMapContext = useContext(HeatmapContext);
  const { getStateData } = heatMapContext;
  useEffect(() => {
    getStateData();
  }, []);

  const gradeAColor = '#009D42'; // green
  const gradeBColor = '#FFDB45'; // yellow
  const gradeCColor = '#FF894A'; // orange
  const gradeDColor = 'crimson'; // red

  return (
    <Fade>
      <div style={{ maxWidth: '60rem', margin: 'auto' }}>
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) => (
              <>
                {geographies.map((geo) => {
                  const cur = allStates.find((s) => s.val === geo.id);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      stroke="#0f4c81"
                      geography={geo}
                      fill={'#FFF'}
                      className="geo-state"
                    />
                  );
                })}
                {geographies.map((geo) => {
                  const centroid = geoCentroid(geo);
                  const cur = allStates.find((s) => s.val === geo.id);
                  return (
                    <g key={geo.rsmKey + '-name'}>
                      {cur &&
                        centroid[0] > -160 &&
                        centroid[0] < -67 &&
                        (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                          <Marker coordinates={centroid}>
                            <text
                              y="2"
                              fontSize={14}
                              textAnchor="middle"
                              stroke="#fff"
                            >
                              {cur.id}
                            </text>
                          </Marker>
                        ) : (
                          <Annotation
                            subject={centroid}
                            dx={offsets[cur.id][0]}
                            dy={offsets[cur.id][1]}
                          >
                            <text
                              x={4}
                              fontSize={14}
                              alignmentBaseline="middle"
                              stroke="#fff"
                            >
                              {cur.id}
                            </text>
                          </Annotation>
                        ))}
                    </g>
                  );
                })}
              </>
            )}
          </Geographies>
        </ComposableMap>
      </div>
    </Fade>
  );
};

export default USMap;
