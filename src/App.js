import React, { Fragment } from 'react';

import './App.scss';

import HeatmapState from './context/heatmap/HeatmapState';
import CountryState from './context/country/CountryState';
import NewsState from './context/news/NewsState';

import Landing from './pages/landing/Landing';
import Summary from './pages/summary/Summary';
import Heatmap from './pages/heatmap/Heatmap';
import News from './pages/news/News';
import AllData from './pages/all-data/AllData';

const App = () => {
	return (
		<CountryState>
			<NewsState>
				<HeatmapState>
					<Fragment>
						<Landing />
						<Summary />
						<Heatmap />
						<AllData />
						{/* <News /> */}
					</Fragment>
				</HeatmapState>
			</NewsState>
		</CountryState>
	);
};

export default App;
