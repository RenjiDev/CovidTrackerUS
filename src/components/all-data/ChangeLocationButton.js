import React from 'react';

const ChangeLocationButton = ({ iconActive, iconInactive, title, active }) => {
	return (
		<div className={`change-location-button ${active && 'active'}`}>
			{active ? iconActive && iconActive : iconInactive && iconInactive}
			<h1>{title}</h1>
		</div>
	);
};

export default ChangeLocationButton;
