import React, { useReducer } from 'react';

import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import { GET_NEWS } from '../Types';

import axios from 'axios';
import request from 'request';
import cheerio from 'cheerio';

const NewsState = (props) => {
  const initialState = {
    loading: true,
    news: [],
  };

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // Get news articles
  const getNews = async () => {
    let newsArr = [];
    const CNN = await axios.get('https://www.cnn.com/search?q=covid');
    let $ = await cheerio.load(CNN.data);

    const CNN_article = $('body').html();

    console.log(CNN_article);
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
