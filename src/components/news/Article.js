import React from 'react';

const Article = ({ title, date, image, newsSource, link }) => {
	return (
		<a
			className='article-root'
			href={link}
			rel='noopener noreferrer'
			target='_blank'
		>
			<div className='article-info'>
				<h1>{title}</h1>
				<h2>
					{date} {newsSource ? `• ${newsSource}` : null}
				</h2>
			</div>
		</a>
	);
};

export default Article;
