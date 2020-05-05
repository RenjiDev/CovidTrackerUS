import React from 'react';
import jump from 'jump.js';

const ChangeLocationButton = ({ iconActive, iconInactive, title, active }) => {
  const onClick = () => {
    jump('.all-data-container');
  };
  return (
    <div
      className={`change-location-button ${active && 'active'}`}
      onClick={onClick}
    >
      {active ? iconActive && iconActive : iconInactive && iconInactive}
      <h1>{title}</h1>
    </div>
  );
};

export default ChangeLocationButton;
