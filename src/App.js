import React, { Fragment } from 'react';

import './App.scss';

import HeatmapState from './context/heatmap/HeatmapState';
import Landing from './pages/landing/Landing';
import Summary from './pages/summary/Summary';
import Heatmap from './pages/heatmap/Heatmap';

const App = () => {
	return (
		<HeatmapState>
			<Fragment>
				<Landing />
				<Summary />
				<Heatmap />
			</Fragment>
		</HeatmapState>
	);
};

export default App;
