const models = require('../models');
const async = require('async');
const _ = require('underscore');

const self = module.exports = {
   inventory: function (req, res, next) {
      let user = {};
      models.getInventory(user, function (err, data) {
         res.send({
            status: 200,
            status_message: "Success listing all drinks",
            data: data
         });
      })
   },

   getTransactions: function (req, res, next) {
      let type = req.body.type

      models.getTransactions(type, function (err, data) {
         res.send({
            status: 200,
            status_message: type + "transactions",
            data: data
         });
      })
   },

   buyDrinks: function (req, res, next) {
      let request = req.body;
      let shortcode = request.shortcode;
      let keyCode = request.shortcode;
      let reqDen = request.demoninations;

      let amountPaid = (reqDen['.01'] * .01) + (reqDen['.05'] * .05) + (reqDen['.25'] * .25);
      request.amountPaid = amountPaid;

      console.log(amountPaid)
      let dbData;
      async.auto({
         getInventory: function (callBack) {
            models.getInventory(keyCode, callBack)
         },
         validation: ['getInventory', function (result, callBack) {
            console.log('getInventory')
            console.log(callBack, result)
            if (result.getInventory.length > 0) {
               let productPrice = result.getInventory[0].price;
               let change = amountPaid - productPrice;
               if (change < 0)
                  callBack("insufficient amount, giving back money", null);
               else {
                  console.log('next iterations')
                  callBack(null, { difference: change })
               }
            } else {
               callBack("given product not available", null)
            }
         }],
         getDenominations: ["validation", function (results, callBack) {
            let changeAmount = results.validation;
            models.getDenominations(changeAmount, callBack);
         }],
         calculateChange: ['getDenominations', function (results, callBack) {
            self.getChange(results, req, callBack);
         }],
         doTransactions: ['calculateChange', function (resuls, callBack) {
            if (results.getDenominations.length > 0) {
               dbData = self.getdbData(results, request);
               console.log(dbData.transactions)
               models.doTransactions(dbData, request, callBack)
               console.log("doTransactions")
            } else {
               callBack("oops something went wrong", null)
            }
         }],
      }), function (err, results) {
         console.log("Async Response place")
         let response;
         console.log(err)
         console.log(results)
         if (err) {
            response = {
               status: 404,
               status_message: err,
            }

         } else {
            response = {
               status: 200,
               status_message: "Transaction successful",
               product: {
                  shortcode: results.getInventory[0].shortcode,
                  quantity: results.getInventory[0].slot_quantity - 1,
                  unit_price: results.getInventory[0].price,
                  inventory: results.getInventory[0].productQuantity
               },
               amountPaid :amountPaid,
					change : results.calculateChange.changeDenominations,
					availableDenominations : results.calculateChange.availableDenominations
            }
         }
         res.send(response);
      }
   },
}
