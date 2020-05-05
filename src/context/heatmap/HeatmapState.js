import React, { useReducer } from 'react';
import axios from 'axios';

import HeatmapContext from './heatmapContext';
import HeatmapReducer from './heatmapReducer';

import {
	GET_STATE_DATA,
	STATE_ERROR,
	SET_CURRENT_STATE,
	CLEAR_CURRENT_STATE,
	FILTER_STATE,
	CLEAR_FILTER,
} from '../Types';

const HeatmapState = (props) => {
	const initialState = {
		loading: true,
		states: null,
		currentState: null,
		grade: null,
		positive: null,
		recovered: null,
		hospitalized: null,
		deaths: null,
		lastUpdated: null,
		filtered: null,
		error: null,
	};

	const [state, dispatch] = useReducer(HeatmapReducer, initialState);

	// Get State data for heat map
	const getStateData = async () => {
		try {
			const res = await axios.get(
				'https://covidtracking.com/api/v1/states/current.json'
			);
			let states = res.data;
			states.forEach((s) => {
				s.code = s.state;
				switch (s.state) {
					case 'AK':
						s.state = 'Alaska';
						break;
					case 'AL':
						s.state = 'Alabama';
						break;
					case 'AR':
						s.state = 'Arkansas';
						break;
					case 'AZ':
						s.state = 'Arizona';
						break;
					case 'CA':
						s.state = 'California';
						break;
					case 'CO':
						s.state = 'Colorado';
						break;
					case 'CT':
						s.state = 'Connecticut';
						break;
					case 'DC':
						s.state = 'District of Columbia';
						break;
					case 'DE':
						s.state = 'Delaware';
						break;
					case 'FL':
						s.state = 'Florida';
						break;
					case 'GA':
						s.state = 'Georgia';
						break;
					case 'HI':
						s.state = 'Hawaii';
						break;
					case 'IA':
						s.state = 'Iowa';
						break;
					case 'ID':
						s.state = 'Idaho';
						break;
					case 'IL':
						s.state = 'Illinois';
						break;
					case 'IN':
						s.state = 'Indiana';
						break;
					case 'KS':
						s.state = 'Kansas';
						break;
					case 'KY':
						s.state = 'Kentucky';
						break;
					case 'LA':
						s.state = 'Louisiana';
						break;
					case 'MA':
						s.state = 'Massachusetts';
						break;
					case 'MD':
						s.state = 'Maryland';
						break;
					case 'ME':
						s.state = 'Maine';
						break;
					case 'MI':
						s.state = 'Michigan';
						break;
					case 'MN':
						s.state = 'Minnesota';
						break;
					case 'MO':
						s.state = 'Missouri';
						break;
					case 'MS':
						s.state = 'Mississippi';
						break;
					case 'MT':
						s.state = 'Montana';
						break;
					case 'NC':
						s.state = 'North Carolina';
						break;
					case 'ND':
						s.state = 'North Dakota';
						break;
					case 'NE':
						s.state = 'Nebraska';
						break;
					case 'NH':
						s.state = 'New Hampshire';
						break;
					case 'NJ':
						s.state = 'New Jersey';
						break;
					case 'NM':
						s.state = 'New Mexico';
						break;
					case 'NV':
						s.state = 'Nevada';
						break;
					case 'NY':
						s.state = 'New York';
						break;
					case 'OH':
						s.state = 'Ohio';
						break;
					case 'OK':
						s.state = 'Oklahoma';
						break;
					case 'OR':
						s.state = 'Oregon';
						break;
					case 'PA':
						s.state = 'Pennsylvania';
						break;
					case 'RI':
						s.state = 'Rhode Island';
						break;
					case 'SC':
						s.state = 'South Carolina';
						break;
					case 'SD':
						s.state = 'South Dakota';
						break;
					case 'TN':
						s.state = 'Tennessee';
						break;
					case 'TX':
						s.state = 'Texas';
						break;
					case 'UT':
						s.state = 'Utah';
						break;
					case 'VA':
						s.state = 'Virginia';
						break;
					case 'VT':
						s.state = 'Vermont';
						break;
					case 'WA':
						s.state = 'Washington';
						break;
					case 'WI':
						s.state = 'Wisconsin';
						break;
					case 'WV':
						s.state = 'West Virginia';
						break;
					case 'WY':
						s.state = 'Wyoming';
						break;
					default:
						break;
				}
			});
			states = states.filter(
				(s) =>
					s.state !== 'PR' &&
					s.state !== 'AS' &&
					s.state !== 'GU' &&
					s.state !== 'MP' &&
					s.state !== 'VI'
			);
			states.sort((a, b) => {
				return b.positive - a.positive;
			});
			dispatch({
				type: GET_STATE_DATA,
				payload: states,
			});
		} catch (err) {
			dispatch({
				type: STATE_ERROR,
				payload: err,
			});
		}
	};

	// Set a current state and populate data
	const setCurrentState = (sCode) => {
		const sArr = state.states.filter((s) => s.state === sCode);
		const data = sArr[0];
		dispatch({
			type: SET_CURRENT_STATE,
			payload: data,
		});
	};

	// Clear current state
	const clearCurrentState = () => {
		dispatch({
			type: CLEAR_CURRENT_STATE,
		});
	};

	// Filter through states
	const filterStates = (text) => {
		// prettier-ignore
		const regex = /^[A-Za-z ]+$/

		if (!text.match(regex)) {
			text = ' ';
		}

		dispatch({
			type: FILTER_STATE,
			payload: text,
		});
	};

	// Clear filter
	const clearFilter = () => {
		dispatch({
			type: CLEAR_FILTER,
		});
	};
	return (
		<HeatmapContext.Provider
			value={{
				loading: state.loading,
				states: state.states,
				currentState: state.currentState,
				grade: state.grade,
				positive: state.positive,
				recovered: state.recovered,
				hospitalized: state.hospitalized,
				deaths: state.deaths,
				lastUpdated: state.lastUpdated,
				filtered: state.filtered,
				error: state.error,
				getStateData,
				setCurrentState,
				clearCurrentState,
				filterStates,
				clearFilter,
			}}
		>
			{props.children}
		</HeatmapContext.Provider>
	);
};

export default HeatmapState;
