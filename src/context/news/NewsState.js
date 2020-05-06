import React, { useReducer } from 'react';

import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import { GET_NEWS, NEWS_ERROR } from '../Types';

import axios from 'axios';

const NewsState = (props) => {
  const initialState = {
    loading: true,
    news: [],
    error: null,
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // Get news articles
  const getNews = async () => {
    try {
      const articles = await axios.get(
        'https://cors-anywhere-covidtrackerus.herokuapp.com/https://covidtrackerus-backend.herokuapp.com/api/news'
      );
      dispatch({
        type: GET_NEWS,
        payload: articles.data,
      });
    } catch (err) {
      dispatch({
        type: NEWS_ERROR,
        payload: err,
      });
    }
  };

  return (
    <NewsContext.Provider
      value={{
        news: state.news,
        loading: state.loading,
        getNews,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
