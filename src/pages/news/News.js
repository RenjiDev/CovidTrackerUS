import React, { useEffect, useContext } from 'react';
import './styles.scss';

import NewsContext from '../../context/news/newsContext';
import Article from '../../components/news/Article';
import { Fade } from 'react-reveal';

const News = () => {
	const newsContext = useContext(NewsContext);
	const { getNews, news, loading } = newsContext;

	useEffect(() => {
		getNews();
		//eslint-disable-next-line
	}, []);

	const dummy = [{}, {}, {}];

	return loading ? null : (
		<div className='news-root'>
			<div className='news-content'>
				<span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='50'
						height='50'
						viewBox='0 0 24 24'
						fill='#C70439'
					>
						<path d='M7 16h13v1h-13v-1zm13-3h-13v1h13v-1zm0-6h-5v1h5v-1zm0 3h-5v1h5v-1zm-17-8v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 17h-17v-15h17v15zm-9-12h-6v4h6v-4z' />
					</svg>
					<h1>World News</h1>
				</span>

				<div className='news-info-grid'>
					{news.map((n) => (
						<Article
							key={n.id}
							title={n.headline}
							date={n.date}
							newsSource={n.provider}
							image={n.img}
							link={n.link}
						/>
					))}
				</div>
			</div>

			<Fade>
				<img className='news-art' src={require('../../assets/news-art.svg')} />
			</Fade>
		</div>
	);
};

export default News;
