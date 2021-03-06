import React, { useContext } from 'react';
import HeatmapContext from '../../context/heatmap/heatmapContext';
import jump from 'jump.js';

const MapListItem = ({ name, total, setShowList }) => {
	const heatmapContext = useContext(HeatmapContext);
	const { setCurrentState } = heatmapContext;

	const showMoreStateInfo = () => {
		setCurrentState(name);
		setShowList(true);
		jump('.heatmap-states-list-container', { duration: 500 });
	};

	return (
		<div className='heatmap-list-item'>
			<span>
				<h1>{name}</h1>
				<h2>{total} cases</h2>
			</span>
			<svg
				onClick={() => showMoreStateInfo()}
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='#656565'
				className='hvr-grow'
			>
				<path d='M13.25 7c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25zm10.75 5c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-2 0c0-5.514-4.486-10-10-10s-10 4.486-10 10 4.486 10 10 10 10-4.486 10-10zm-13-2v2h2v6h2v-8h-4z' />
			</svg>
		</div>
	);
};

export default MapListItem;
