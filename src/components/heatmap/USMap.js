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

const USMap = ({ setShowList }) => {
	const heatMapContext = useContext(HeatmapContext);
	const { getStateData, setCurrentState } = heatMapContext;

	useEffect(() => {
		getStateData();
	}, []);

	const gradeAColor = '#BE3E5A'; // #D83B65
	const gradeBColor = '#A20028'; // #C70039
	const gradeCColor = '#86001C'; // #A20028
	const gradeDColor = '#6A0010'; // #710011

	const handleClick = (stateID) => {
		let state = '';
		switch (stateID) {
			case 'AK':
				state = 'Alaska';
				break;
			case 'AL':
				state = 'Alabama';
				break;
			case 'AR':
				state = 'Arkansas';
				break;
			case 'AZ':
				state = 'Arizona';
				break;
			case 'CA':
				state = 'California';
				break;
			case 'CO':
				state = 'Colorado';
				break;
			case 'CT':
				state = 'Connecticut';
				break;
			case 'DC':
				state = 'District of Columbia';
				break;
			case 'DE':
				state = 'Delaware';
				break;
			case 'FL':
				state = 'Florida';
				break;
			case 'GA':
				state = 'Georgia';
				break;
			case 'HI':
				state = 'Hawaii';
				break;
			case 'IA':
				state = 'Iowa';
				break;
			case 'ID':
				state = 'Idaho';
				break;
			case 'IL':
				state = 'Illinois';
				break;
			case 'IN':
				state = 'Indiana';
				break;
			case 'KS':
				state = 'Kansas';
				break;
			case 'KY':
				state = 'Kentucky';
				break;
			case 'LA':
				state = 'Louisiana';
				break;
			case 'MA':
				state = 'Massachusetts';
				break;
			case 'MD':
				state = 'Maryland';
				break;
			case 'ME':
				state = 'Maine';
				break;
			case 'MI':
				state = 'Michigan';
				break;
			case 'MN':
				state = 'Minnesota';
				break;
			case 'MO':
				state = 'Missouri';
				break;
			case 'MS':
				state = 'Mississippi';
				break;
			case 'MT':
				state = 'Montana';
				break;
			case 'NC':
				state = 'North Carolina';
				break;
			case 'ND':
				state = 'North Dakota';
				break;
			case 'NE':
				state = 'Nebraska';
				break;
			case 'NH':
				state = 'New Hampshire';
				break;
			case 'NJ':
				state = 'New Jersey';
				break;
			case 'NM':
				state = 'New Mexico';
				break;
			case 'NV':
				state = 'Nevada';
				break;
			case 'NY':
				state = 'New York';
				break;
			case 'OH':
				state = 'Ohio';
				break;
			case 'OK':
				state = 'Oklahoma';
				break;
			case 'OR':
				state = 'Oregon';
				break;
			case 'PA':
				state = 'Pennsylvania';
				break;
			case 'RI':
				state = 'Rhode Island';
				break;
			case 'SC':
				state = 'South Carolina';
				break;
			case 'SD':
				state = 'South Dakota';
				break;
			case 'TN':
				state = 'Tennessee';
				break;
			case 'TX':
				state = 'Texas';
				break;
			case 'UT':
				state = 'Utah';
				break;
			case 'VA':
				state = 'Virginia';
				break;
			case 'VT':
				state = 'Vermont';
				break;
			case 'WA':
				state = 'Washington';
				break;
			case 'WI':
				state = 'Wisconsin';
				break;
			case 'WV':
				state = 'West Virginia';
				break;
			case 'WY':
				state = 'Wyoming';
				break;
		}
		setCurrentState(state);
		setShowList(true);
	};

	function getStateColor(cur) {
		let returnColor = '';

		heatMapContext.states.forEach((value) => {
			// Get the right state in the country
			if (cur.id === value.code) {
				// Get the right color for the state in the country
				let total = value.positive - value.recovered;
				if (total <= 10000) {
					returnColor = gradeAColor;
				}
				if (total > 10000 && total <= 30000) {
					returnColor = gradeBColor;
				}
				if (total > 30000 && total <= 50000) {
					returnColor = gradeCColor;
				}
				if (total > 50000) {
					returnColor = gradeDColor;
				}
			}
		});
		return returnColor;
	}

	return (
		<Fade>
			<div style={{ maxWidth: '60rem', margin: 'auto' }}>
				<ComposableMap projection='geoAlbersUsa'>
					<Geographies geography={geoUrl}>
						{({ geographies }) => (
							<>
								{geographies.map((geo) => {
									const cur = allStates.find((s) => s.val === geo.id);
									return (
										<Geography
											key={geo.rsmKey}
											stroke='#1C1C1C'
											geography={geo}
											fill={getStateColor(cur)}
											className='geo-state'
											onClick={() => handleClick(cur.id)}
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
															y='2'
															fontSize={14}
															textAnchor='middle'
															stroke='#fff'
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
															alignmentBaseline='middle'
															stroke='#fff'
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
