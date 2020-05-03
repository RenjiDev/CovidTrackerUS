import { GET_NEWS, NEWS_ERROR } from '../Types';

export default (state, action) => {
	switch (action.type) {
		case GET_NEWS:
			console.log(action.payload);
			return {
				...state,
				news: action.payload,
				loading: false,
			};
		case NEWS_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
