const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/inventory");

const inventorySeed = [
   {
      product: "Coke",
      retail: .50,
      quantity: 5
   },
   {
      product: "Diet Coke",
      retail: .50,
      quantity: 5
   },
   {
      product: "Sprite",
      retail: .50,
      quantity: 5
   }
]

db.Inventory
   .remove({})
   .then(() => db.Inventory.collection.insertMany(inventorySeed))
   .then(data => {
      console.log(data.result.n + "Inventory inserted!");
      process.exit(0);
   }).catch(err => {
      console.error(err);
      process.exit(1);
   })