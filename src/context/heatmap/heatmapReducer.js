import {
	GET_STATE_DATA,
	STATE_ERROR,
	SET_CURRENT_STATE,
	CLEAR_CURRENT_STATE,
	FILTER_STATE,
	CLEAR_FILTER,
} from '../Types';

export default (state, action) => {
	switch (action.type) {
		case GET_STATE_DATA:
			return {
				...state,
				states: action.payload,
				loading: false,
			};
		case STATE_ERROR: //For debugging purposes
			return {
				...state,
				error: action.payload,
			};
		case SET_CURRENT_STATE:
			return {
				...state,
				currentState: action.payload.state,
				grade: action.payload.grade,
				positive: action.payload.positive,
				recovered: action.payload.recovered,
				hospitalized: action.payload.hospitalizedCurrently,
				deaths: action.payload.death,
				lastUpdated: action.payload.dateModified,
			};
		case CLEAR_CURRENT_STATE:
			return {
				...state,
				states: null,
				currentState: null,
				grade: null,
				positive: null,
				recovered: null,
				hospitalized: null,
				deaths: null,
				lastUpdated: null,
			};
		case FILTER_STATE:
			return {
				// Fix this shit :)
				...state,
				filtered: state.states.filter((s) => {
					const regex = new RegExp(`^${action.payload}`, 'i');
					return s.state.match(regex);
				}),
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null,
			};
		default:
			return state;
	}
};
