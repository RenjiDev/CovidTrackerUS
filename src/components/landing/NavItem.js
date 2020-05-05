import React from 'react';
import jump from 'jump.js';

const NavItem = ({ icon, title, jumpLink, link }) => {
	const onClick = () => {
		if (jumpLink) {
			jump(jumpLink);
		}
		if (link) {
			window.open(link, '_blank');
		}
	};
	return (
		<div className='ldg-nav-item hvr-grow' onClick={onClick}>
			{icon}
			<h1>{title}</h1>
		</div>
	);
};

export default NavItem;
