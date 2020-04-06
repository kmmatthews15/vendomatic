import React from 'react';
import PropTypes from 'prop-types';

export default function Available({money}){	
	return (
		<div className="result">${money}</div>			
	)
}

Available.propTypes = {
  money: PropTypes.number
}