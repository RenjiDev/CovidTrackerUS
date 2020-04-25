import React, { useEffect, useContext } from 'react';
import './styles.scss';

import NewsContext from '../../context/news/newsContext';

const News = () => {
  const newsContext = useContext(NewsContext);
  const { getNews } = newsContext;
  useEffect(() => {
    getNews();

    //eslint-disable-next-line
  }, []);

  return <div className="news-container"></div>;
};

export default News;
