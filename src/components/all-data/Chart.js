import React from 'react';

const Chart = () => {
	return (
		<div>
			<iframe
				src='https://ourworldindata.org/grapher/total-deaths-and-cases-covid-19?year=2020-04-28'
				style={{ width: '100%', height: '600px', border: '0px none' }}
			></iframe>
		</div>
	);
};

export default Chart;
