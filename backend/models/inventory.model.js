const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Inventory = new Schema({
   inventory_product: {
      type: String
   },
   inventory_price: {
      type: Number
   },
   inventory_coin: {
      type: Number
   }
});

module.exports = mongoose.model('Inventory', Inventory);