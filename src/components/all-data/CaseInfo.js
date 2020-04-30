import React from 'react';

const CaseInfo = ({ title, amount }) => {
	return (
		<div className='case-info'>
			<h1>{amount}</h1>
			<h2>{title}</h2>
		</div>
	);
};

export default CaseInfo;
