import React, { useContext, useEffect } from 'react';
import './styles.scss';
import Info from '../../components/summary/Info';

import CountryContext from '../../context/country/countryContext';

const Summary = () => {
	return (
		<div className='summary-root'>
			<div className='summary-col-1'>
				<span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='34'
						height='44'
						viewBox='0 0 24 24'
						fill='#c70039'
					>
						<path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z' />
					</svg>
					<h1>Summary</h1>
				</span>

				<div className='summary-info-grid'>
					<div className='summary-info-row'>
						<Info title='Confirmed' amount='20,000,000' />
						<Info title='Active' amount='20,000,000' />
					</div>
					<div className='summary-info-row'>
						<Info title='Confirmed' amount='20,000,000' />
						<Info title='Active' amount='20,000,000' />
					</div>
					<div className='summary-info-row'>
						<Info title='Confirmed' amount='20,000,000' />
						<Info title='Active' amount='20,000,000' />
					</div>
				</div>
			</div>

			<div className='summary-col-2'>
				<img
					className='summary-art'
					src={require('../../assets/summary-art.svg')}
				/>
			</div>
		</div>
	);
};

export default Summary;
