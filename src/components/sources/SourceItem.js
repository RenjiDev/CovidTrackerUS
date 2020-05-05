import React from 'react';

const SourceItem = ({ title, sourceTitle, url }) => {
	return (
		<a target='_blank' className='source-item hvr-icon-float' href={url}>
			<div className='source-content-mobile'>
				<span className='source-title hvr-icon'>
					<h1>{title}</h1>
				</span>
				<span className='source-location-title hvr-icon'>
					<h2>{sourceTitle}</h2>
				</span>
			</div>

			<div className='source-content-desktop'>
				<span className='source-title hvr-icon'>
					<h1>{title}</h1>
				</span>
				<span className='source-location-title hvr-icon'>
					<h2>{sourceTitle}</h2>
				</span>
			</div>

			<span className='source-link-icon hvr-icon'>
				<svg
					width='24'
					height='24'
					xmlns='http://www.w3.org/2000/svg'
					fillRule='evenodd'
					clipRule='evenodd'
					fill='#C70439'
				>
					<path d='M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z' />
				</svg>
			</span>
		</a>
	);
};

export default SourceItem;
