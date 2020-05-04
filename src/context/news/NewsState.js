import React, { useReducer } from 'react';

import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import { GET_NEWS, NEWS_ERROR } from '../Types';

import axios from 'axios';
import cheerio from 'cheerio';

const NewsState = (props) => {
	const initialState = {
		loading: true,
		news: [],
		error: null,
	};

	const [state, dispatch] = useReducer(NewsReducer, initialState);

	// Get news articles
	const getNews = async () => {
		let payload = [];
		try {
			const articles = await axios.get(
				'https://cors-anywhere-covidtrackerus.herokuapp.com/https://www.google.com/search?q=covid+news&source=lnms&tbm=nws&sa=X&ved=2ahUKEwi00dyDiIPpAhXZXc0KHUXlAlQQ_AUoAXoECAwQAw&biw=1920&bih=898'
			);
			const $ = await cheerio.load(articles.data);

			const desktopCardClassName = $('.nChh6e').text();
			if (desktopCardClassName === '') {
				$('.CFbRHb').each((i, el) => {
					const artObj = {};
					artObj.id = i;
					const link = $(el).find('a').attr('href');
					artObj.link = link;
					const headline = $(el).find('.ZUdMOb').text();
					artObj.headline = headline;
					// const subTitle = $(el).find('.eYN3rb').text();
					// artObj.subTitle = subTitle;
					const provider = $(el).find('.qjdEw').find('img').attr('alt');
					artObj.provider = provider;
					// const providerLogo = $(el).find('.rISBZc').attr('alt');
					// artObj.providerLogo = providerLogo;
					// const img = $(el).find('.KNcnob').find('g-img').find('img').attr('src');
					// artObj.img = img;
					const date = $(el).find('.pBrkfd').find('span').text();
					artObj.date = date;
					payload.push(artObj);
				});
				payload = payload.filter((p) => p.headline);
				dispatch({
					type: GET_NEWS,
					payload,
				});
			} else {
				$('.nChh6e').each((i, el) => {
					const artObj = {};
					artObj.id = i;
					const link = $(el).find('a').attr('href');
					artObj.link = link;
					const headline = $(el).find('.phYMDf').text();
					artObj.headline = headline;
					const subTitle = $(el).find('.eYN3rb').text();
					artObj.subTitle = subTitle;
					const provider = $(el).find('.pDavDe').text();
					artObj.provider = provider;
					const providerLogo = $(el).find('.wQYexc').find('img').attr('src');
					artObj.providerLogo = providerLogo;
					const img = $(el)
						.find('.KNcnob')
						.find('g-img')
						.find('img')
						.attr('src');
					artObj.img = img;
					const date = $(el).find('.eNg7of').text();
					artObj.date = date;
					payload.push(artObj);
				});
				payload = payload.filter((p) => p.headline);
				dispatch({
					type: GET_NEWS,
					payload,
				});
			}
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
