import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Money extends Component {
	render(){
		const {coins, addValue, children} = this.props;
		const buttons = coins.map((item, i) => { 
			return (
						<button key={i} className="btn btn-warning btn-warning--coins" value={item} onClick={addValue}>
							{item < 1 ? `${item*100 }¢` : `$${item}`}
						</button>	
					)
				} 
			)
		return (
			<div className="row text-center p-relative">
			  <h3>Coins:</h3>
		  	<div className="coins">{buttons}</div>
		  	<h3>Money available:</h3>
			  {children}			  
			</div>
		)
	}
}

Money.propTypes = {
  coins: PropTypes.array,
  addValue: PropTypes.func,
  children: PropTypes.array
}