import React, { useReducer } from 'react';
import axios from 'axios';

import HeatmapContext from './heatmapContext';
import HeatmapReducer from './heatmapReducer';

import {
  GET_STATE_DATA,
  STATE_ERROR,
  SET_CURRENT_STATE,
  CLEAR_CURRENT_STATE,
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
    error: null,
  };

  const [state, dispatch] = useReducer(HeatmapReducer, initialState);

  // Get State data for heat map
  const getStateData = async () => {
    try {
      const res = await axios.get(
        'https://covidtracking.com/api/v1/states/current.json'
      );

      dispatch({
        type: GET_STATE_DATA,
        payload: res.data,
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
        error: state.error,
        getStateData,
        setCurrentState,
        clearCurrentState,
      }}
    >
      {props.children}
    </HeatmapContext.Provider>
  );
};

export default HeatmapState;
