import React, { useContext, useEffect, useState } from 'react';
import './styles.scss';
import USMap from '../../components/heatmap/USMap';
import MapListItem from '../../components/heatmap/MapListItem';
import SearchBar from '../../components/heatmap/SearchBar';
import StateInfo from '../../components/heatmap/StateInfo';
import HeatmapContext from '../../context/heatmap/heatmapContext';

const Heatmap = () => {
	const heatmapContext = useContext(HeatmapContext);
	const [showList, setShowList] = useState(false);
	const { getStateData, loading, states, filtered } = heatmapContext;

	useEffect(() => {
		getStateData();
		//eslint-disable-next-line
	}, []);

	return loading ? null : (
		<div className='heatmap-container'>
			<div className='heatmap-title-mobile'>
				<span>
					<img
						src={require('../../assets/fire.svg')}
						className='heatmap-title-icon'
						alt='Heatmap'
					/>
					<h1>Heatmap</h1>
				</span>
				<h2>United States of America</h2>
			</div>

			<div className='heatmap-map-container'>
				<USMap setShowList={setShowList} />
			</div>
			<div className='heatmap-states-list-container'>
				{showList ? (
					<StateInfo setShowList={setShowList} />
				) : (
					<>
						<span>
							<img
								src={require('../../assets/fire.svg')}
								className='heatmap-title-icon'
								alt='Heatmap'
							/>
							<h1>Heatmap</h1>
						</span>
						<h2>United States of America</h2>

						<SearchBar />
						<div className='heatmap-scroll-area'>
							{filtered
								? filtered.map((state) => (
										<MapListItem
											name={state.state}
											total={state.positive.toLocaleString()}
											setShowList={setShowList}
											key={Math.random()}
										/>
								  ))
								: states.map((state) => (
										<MapListItem
											name={state.state}
											total={state.positive.toLocaleString()}
											setShowList={setShowList}
											key={Math.random()}
										/>
								  ))}
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Heatmap;
