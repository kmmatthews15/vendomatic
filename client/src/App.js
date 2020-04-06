import React, { Component } from 'react';
import Items from './Components/Items';
import Money from './Components/Money';
import Available from './Components/Available';
import BtnMoneyBack from './Components/BtnMoneyBack';
import PropTypes from 'prop-types';

import './css/App.css';

import coke from './img/coke.jpg';
import dietpepsi from './img/dietpepsi.jpg';
import sprite from './img/sprite.jpg';

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [
        {itemId: "a01", itemName: "Diet Pepsi", itemPrice: 0.50, itemCount: 5, imgUrl: dietpepsi},
        {itemId: "a02", itemName: "Coke", itemPrice: 0.50, itemCount: 5, imgUrl: coke},
        {itemId: "a03", itemName: "Sprite", itemPrice: 0.50, itemCount: 5, imgUrl: sprite},
      ],
      money: 0,
      coins: [0.05, 0.10, 0.25],
      isPurchaseAlowed: true,
      justPurchased: ""
    }
    this.addValue = this.addValue.bind(this);
    this.moneyBack = this.moneyBack.bind(this);
    this.purchaseItem = this.purchaseItem.bind(this);
  } 

  addValue(e){
    const currentValue = this.state.money;
    const isPurchaseAlowed = this.state.isPurchaseAlowed;
    const justPurchased = this.state.justPurchased;
    const addedValue = parseFloat(e.target.value, 10);
    const newValue = currentValue + addedValue;    

    if(isPurchaseAlowed){
      this.setState({
        money: parseFloat(newValue.toFixed(2), 10)
      });      
    } else {
      alert(`One item at a time please. Collect your ${justPurchased.toLowerCase()} first, and then make new purchase.`);
    }

    if(currentValue === .10 || currentValue === .05){
      alert('Machine only takes in quarters. Get your money back and insert quarters please!');
    }

    if(currentValue === .25){
      alert('Insert another quarter to complete your purchase!');
    }
  }

  moneyBack(){
    this.setState({
      money: 0,
      isPurchaseAlowed: true,
      justPurchased: ""
    });
  }

  purchaseItem(e){
    e.preventDefault();
    const currentState = this.state.items.slice(0);
    const isPurchaseAlowed = this.state.isPurchaseAlowed;
    let currentMoney = this.state.money;
    const justPurchased = this.state.justPurchased;
    const index = e.target.getAttribute('data-value');
    const howMany = currentState[index].itemCount;
    const whichItem = currentState[index].itemName;
    const itemPrice = currentState[index].itemPrice;

    if (howMany > 0 && isPurchaseAlowed && itemPrice > currentMoney) {
      alert("It looks like you don't have enough money. Insert some coins.");
    } 

    if(!isPurchaseAlowed){
      alert(`One item at a time please. Collect your ${justPurchased.toLowerCase()} first, and then make new purchase.`);
    }

     if( isPurchaseAlowed && howMany < 1){
      alert("Out of stock. Would you like something else?");
    }

    if(isPurchaseAlowed && howMany > 0 && currentState[index].itemCount > 0 && itemPrice <= currentMoney){       
      currentState[index].itemCount -= 1;    
      currentMoney -= itemPrice;

      this.setState({
        items: currentState,
        money: parseFloat(currentMoney.toFixed(2), 10),
        isPurchaseAlowed: !isPurchaseAlowed,
        justPurchased: whichItem 
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center">VEND-O-MATIC</h1>
          <div className="alert alert-info text-center" role="alert">
            <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Add virtual money, purchase by clicking on item!</div>
          <Items  items={this.state.items} purchaseItem={this.purchaseItem} />
          <Money  coins={this.state.coins} 
                  money={this.state.money} 
                  addValue={this.addValue}
                  moneyBack={this.moneyBack}
                  lastPurchased={this.state.justPurchased}
          >
            <Available money={this.state.money} />
            <BtnMoneyBack money={this.state.money} 
                          moneyBack={this.moneyBack} 
                          lastPurchased={this.state.justPurchased} 
            />
          </Money>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array,
  purchaseItem: PropTypes.func,
  coins: PropTypes.array,
  money: PropTypes.number,
  addValue: PropTypes.func,
  moneyBack: PropTypes.func,
  lastPurchased: PropTypes.string
}

export default App;