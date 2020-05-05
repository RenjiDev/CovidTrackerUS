import React, { Fragment } from 'react';

import './App.scss';

import HeatmapState from './context/heatmap/HeatmapState';
import CountryState from './context/country/CountryState';
import NewsState from './context/news/NewsState';

import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import Landing from './pages/landing/Landing';
import Summary from './pages/summary/Summary';
import Heatmap from './pages/heatmap/Heatmap';
import News from './pages/news/News';
import AllData from './pages/all-data/AllData';
import Sources from './pages/sources/Sources';

const indexContent = {
	title: 'COVID-19 Tracker US',
	description: 'Quickly track cases of COVID-19 in the United States.',
	url: 'https://covidtrackerus.org/',
	image: 'https://covidtrackerus.org/icon512.png',
};

ReactGA.initialize('UA-163780283-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
	return (
		<CountryState>
			<Helmet
				title={indexContent.title}
				meta={[
					{
						name: 'description',
						property: 'og:description',
						content: indexContent.description,
					},
					{ property: 'og:title', content: indexContent.title },
					{ property: 'og:url', content: indexContent.url },
					{ property: 'og:image', content: indexContent.image },
					{ property: 'og:image:type', content: 'image/png' },
					{ property: 'og:twitter:image:src', content: indexContent.image },
					{ property: 'og:twitter:title', content: indexContent.title },
					{
						property: 'og:twitter:description',
						content: indexContent.description,
					},
				]}
			/>
			<NewsState>
				<HeatmapState>
					<Fragment>
						<Landing />
						<Summary />
						<Heatmap />
						<AllData />
						<News />
						<Sources />
					</Fragment>
				</HeatmapState>
			</NewsState>
		</CountryState>
	);
};

export default App;
