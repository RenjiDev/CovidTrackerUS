import React, { useEffect } from 'react';
import './styles.scss';

import request from 'request';
import cheerio from 'cheerio';
import axios from 'axios';

const News = () => {
  const getNewsArticles = async () => {
    const html = await axios.get('https://www.renjidev.io/');
    console.log(html.data);
  };

  useEffect(() => {
    getNewsArticles();
  }, []);

  return <div className="news-container"></div>;
};

export default News;
