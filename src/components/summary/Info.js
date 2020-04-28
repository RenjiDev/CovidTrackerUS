import React from 'react';

const Info = ({ title, amount }) => {
	return (
		<div className='summary-info-root'>
			<h1>{amount}</h1>
			<h2>{title}</h2>
		</div>
	);
};

export default Info;
