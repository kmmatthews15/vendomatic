import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BtnMoneyBack extends Component {
	render(){
		const {lastPurchased, moneyBack, money} = this.props; 
		return (
			lastPurchased || money ? <button onClick={moneyBack} className="btn btn-success">
				Get your {lastPurchased ? (lastPurchased).toLowerCase() : null} {lastPurchased && money ? 'and' : null } {money ? 'money' : null} 
			</button> : <button className="btn btn-success" disabled>Get your money</button>  
		)
	} 
}

BtnMoneyBack.propTypes = {
  money: PropTypes.number,
  moneyBack: PropTypes.func,
  lastPurchased: PropTypes.string
}