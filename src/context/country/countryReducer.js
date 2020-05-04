import {
  GET_COUNTRY_DATA,
  COUNTRY_ERROR,
  SET_CURRENT_COUNTRY,
  FILTER_COUNTRY,
  CLEAR_FILTER,
} from '../Types';

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTRY_DATA:
      return {
        ...state,
        countries: action.payload.countries,
        timeUpdated: action.payload.global.time,
        currentCountry: action.payload.global.country,
        cases: action.payload.global.cases,
        deaths: action.payload.global.deaths,
        tests: action.payload.global.tests.total,
        globalData: action.payload.global,
        loading: false,
      };
    case COUNTRY_ERROR: // For debugging purposes
      return {
        ...state,
        error: action.payload,
      };
    case SET_CURRENT_COUNTRY:
      return {
        ...state,
        timeUpdated: action.payload.time,
        currentCountry: action.payload.country,
        cases: action.payload.cases,
        deaths: action.payload.deaths,
        loading: false,
      };
    case FILTER_COUNTRY:
      return {
        ...state,
        filtered: state.countries.filter((c) => {
          const regex = new RegExp(`^${action.payload}`, 'i');
          return c.country.match(regex);
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
