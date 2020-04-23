import React, { Fragment } from 'react';

import './App.scss';

import HeatmapState from './context/heatmap/HeatmapState';
import Landing from './pages/landing/Landing';

const App = () => {
	return (
		<HeatmapState>
			<Fragment>
				<Landing />
			</Fragment>
		</HeatmapState>
	);
};

export default App;
