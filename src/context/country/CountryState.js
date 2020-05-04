import React, { useReducer } from 'react';
import axios from 'axios';

import rapidAPI from '../../config/Rapid.json';

import CountryContext from './countryContext';
import CountryReducer from './countryReducer';
import {
  SET_CURRENT_COUNTRY,
  FILTER_COUNTRY,
  GET_COUNTRY_DATA,
  COUNTRY_ERROR,
  CLEAR_FILTER,
} from '../Types';

const CountryState = (props) => {
  const initialState = {
    loading: true,
    countries: null,
    timeUpdated: null,
    currentCountry: null,
    cases: null,
    deaths: null,
    globalData: null,
    filtered: null,
    chartData: null,
  };

  const [state, dispatch] = useReducer(CountryReducer, initialState);

  // Get all countries and modify them easily to be used in components; Set current country to global
  const getCountryData = async () => {
    const headers = {
      'x-rapid-api-host': rapidAPI.RAPID_API_HOST,
      'x-rapidapi-key': rapidAPI.RAPID_API_KEY,
    };

    try {
      const res = await axios.get(
        'https://covid-193.p.rapidapi.com/statistics',
        { headers: headers }
      );
      const countries = res.data.response;
      countries.sort((a, b) => {
        return b.cases.total - a.cases.total;
      });
      let globalArr = countries.filter((c) => c.country === 'All');
      let global = globalArr[0];
      global.country = 'Global';
      let i = 0;
      // Normalize goofy country names
      countries.forEach((c) => {
        c.id = i++;
        switch (c.country) {
          case 'USA':
            c.country = 'United States of America';
            break;
          case 'UAE':
            c.country = 'United Arab Emirates';
            break;
          case 'UK':
            c.country = 'United Kingdom';
            break;
          case 'CAR':
            c.country = 'Central African Republic';
            break;
          case 'S-Korea':
            c.country = 'South Korea';
            break;
          case 'Saudi-Arabia':
            c.country = 'Saudi Arabia';
            break;
          case 'Hong-Kong':
            c.country = 'Hong Kong';
            break;
          case 'South-Africa':
            c.country = 'South Africa';
            break;
          case 'San-Marino':
            c.country = 'San Marino';
            break;
          case 'Costa-Rica':
            c.country = 'Costa Rica';
            break;
          case 'Dominican-Republic':
            c.country = 'Dominican Republic';
            break;
          case 'Bosnia-and-Herzegovina':
            c.country = 'Bosnia and Herzegovina';
            break;
          case 'Faeroe-Islands':
            c.country = 'Faeroe Islands';
            break;
          case 'North-Macedonia':
            c.country = 'North Macedonia';
            break;
          case 'Sri-Lanka':
            c.country = 'Sri Lanka';
            break;
          case 'Burkina-Faso':
            c.country = 'Burkina Faso';
            break;
          case 'New-Zealand':
            c.country = 'New Zealand';
            break;
          case 'Trinidad-and-Tobago':
            c.country = 'Trinidad and Tobago';
            break;
          case 'Puerto-Rico':
            c.country = 'Puerto Rico';
            break;
          case 'French-Polynesia':
            c.country = 'French Polynesia';
            break;
          case 'Ivory-Coast':
            c.country = 'Ivory Coast';
            break;
          case 'Equatorial-Guinea':
            c.country = 'Equatorial Guinea';
            break;
          case 'US-Virgin-Islands':
            c.country = 'U.S. Virgin Islands';
            break;
          case 'Saint-Martin':
            c.country = 'Saint Martin';
            break;
          case 'New-Caledonia':
            c.country = 'New Caledonia';
            break;
          case 'Cayman-Islands':
            c.country = 'Cayman Islands';
            break;
          case 'Cabo-Verde':
            c.country = 'Cabo Verde';
            break;
          case 'El-Salvador':
            c.country = 'El Salvador';
            break;
          case 'Isle-of-Man':
            c.country = 'Isle of Man';
            break;
          case 'Saint-Lucia':
            c.country = 'Saint Lucia';
            break;
          case 'Antigua-and-Barbuda':
            c.country = 'Antigua and Barbuda';
            break;
          case 'Vatican-City':
            c.country = 'Vatican City';
            break;
          case 'Papua-New-Guinea':
            c.country = 'Papua New Guinea';
            break;
          case 'St-Vincent-Grenadines':
            c.country = 'St. Vincent and the Grenadines';
            break;
          case 'Sint-Maarten':
            c.country = 'Sint Maarten';
            break;
          case 'Turks-and-Caicos':
            c.country = 'Turks and Caicos';
            break;
          case 'British-Virgin-Islands':
            c.country = 'British Virgin Islands';
            break;
          case 'Saint-Kitts-and-Nevis':
            c.country = 'Saint Kitts and Nevis';
            break;
          case 'Sierra-Leone':
            c.country = 'Sierra Leone';
            break;
          case 'Caribbean-Netherlands':
            c.country = 'Caribbean Netherlands';
            break;
          case 'Falkland-Islands':
            c.country = 'Falkland Islands';
            break;
          case 'Western-Sahara':
            c.country = 'Western Sahara';
            break;
          case 'South-Sudan':
            c.country = 'South Sudan';
            break;
          case 'Saint-Pierre-Miquelon':
            c.country = 'St Pierre and Miquelon';
            break;
          case 'Sao-Tome-and-Principe':
            c.country = 'São Tomé and Príncipe';
            break;
          case 'North-America':
            c.country = 'North America';
            break;
          case 'South-America':
            c.country = 'South America';
          default:
            break;
        }
      });

      dispatch({
        type: GET_COUNTRY_DATA,
        payload: { global, countries },
      });
    } catch (err) {
      dispatch({
        type: COUNTRY_ERROR,
        payload: err,
      });
    }
  };

  // Change the current country
  const setCurrentCountry = (name) => {
    const countryArr = state.countries.filter((c) => c.country === name);
    const country = countryArr[0];
    dispatch({
      type: SET_CURRENT_COUNTRY,
      payload: country,
    });
  };

  const filterCountries = (text) => {
    dispatch({
      type: FILTER_COUNTRY,
      payload: text,
    });
  };

  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    });
  };

  return (
    <CountryContext.Provider
      value={{
        loading: state.loading,
        countries: state.countries,
        timeUpdated: state.timeUpdated,
        currentCountry: state.currentCountry,
        globalData: state.globalData,
        cases: state.cases,
        deaths: state.deaths,
        tests: state.tests,
        filtered: state.filtered,
        getCountryData,
        setCurrentCountry,
        filterCountries,
        clearFilter,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryState;
