import React from 'react';

const NavItem = ({ icon, title }) => {
	return (
		<div className='ldg-nav-item'>
			{icon}
			<h1>{title}</h1>
		</div>
	);
};

export default NavItem;
