import { GET_NEWS, NEWS_ERROR } from '../Types';

export default (state, action) => {
<<<<<<< HEAD
  switch (action.type) {
    case GET_NEWS:
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
=======
	switch (action.type) {
		case GET_NEWS:
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
>>>>>>> 99aee11ea5d9b2ef793a4e018d0a52c325ab56ce
};
