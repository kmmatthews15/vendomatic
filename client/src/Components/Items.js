import React, {Component} from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

export default class Items extends Component {
	render(){		
		const {items, purchaseItem} = this.props;
		const allItems = items.map((item, i) => {
			return (
				<Item purchaseItem={purchaseItem} item={item} key={item.itemId} i={i} />
		  )
		})
		return (
			<div className="row items-container">
		    {allItems}
		  </div>
		)
	}
}

Items.propTypes = {
  items: PropTypes.array,
  purchaseItem: PropTypes.func
}
