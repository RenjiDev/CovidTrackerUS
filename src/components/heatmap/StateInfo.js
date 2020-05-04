import React, { useContext } from 'react';
import HeatmapContext from '../../context/heatmap/heatmapContext';

const StateInfo = ({ setShowList }) => {
	const heatmapContext = useContext(HeatmapContext);
	const {
		grade,
		positive,
		recovered,
		hospitalized,
		deaths,
		lastUpdated,
		currentState,
		clearCurrentState,
	} = heatmapContext;

	const data = [
		{
			title: 'Positive Cases',
			description: 'Cases are cumulative',
			value: positive?.toLocaleString() || 'Unknown',
		},
		{
			title: 'Hospitalized',
			description: '',
			value: hospitalized?.toLocaleString() || 'Unknown',
		},
		{
			title: 'Recovered',
			description: '',
			value: recovered?.toLocaleString() || 'Unknown',
		},
		{
			title: 'Deaths',
			description: '',
			value: deaths?.toLocaleString() || 'Unknown',
		},
		{
			title: 'Grade',
			description:
				"*This is not a grade for the testing effort itself — but rather for the comprehensiveness and regularity of each state's reporting.",
			value: grade || 'Unknown',
		},
	];

	const Item = ({ title, description, value }) => {
		return (
			<div className='state-item'>
				<span>
					<h1>{title}</h1>
					{description ? <p>{description}</p> : null}
				</span>

				<h1>{value}</h1>
			</div>
		);
	};

	return (
		<div className='state-info-container'>
			<div className='state-info-header'>
				<svg
					onClick={() => setShowList(false)}
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='#fff'
				>
					<path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
				</svg>
				<h1>{currentState || 'Unknown'}</h1>
			</div>

			<div className='state-info-content'>
				{data.map((value) => (
					<Item
						title={value.title}
						description={value.description}
						value={value.value}
					/>
				))}
			</div>

			<p>Last updated on {new Date(lastUpdated).toLocaleString()}</p>
		</div>
	);
};

export default StateInfo;
