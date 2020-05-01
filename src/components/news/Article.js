import React from 'react';

const Article = ({ title, date, image, newsSource }) => {
	return (
		<div className='article-root'>
			{image || (
				<img
					src={require('../../assets/landing-stock.jpg')}
					className='article-thumbnail'
				/>
			)}

			<div className='article-info'>
				<h1>{title}</h1>
				<h2>
					{date} • {newsSource}
				</h2>
			</div>
		</div>
	);
};

export default Article;
