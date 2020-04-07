# vend-o-matic

You are responsible for designing a service which will support a beverage vending machine that is tessted VIA HTTP before being place into an production environment

## constraints 
1. Machine only accepts US quarters - you physically cannot put anything else in, and you  can only put one coin in at a time.  
2. Purchase price of an item is two US quarters.  
3. Machine only holds five of each of the three beverages available to purchase in its  inventory.  
4. Machine will accept more than the purchase price of coins, but will only dispense a single  beverage per transaction.  
5. Upon transaction completion, any unused quarters must be dispensed back to the  customer.  
6. All test interactions will be performed with a single content type of “application/json”. 

## installation
First clone the repo somewhere on your Mac/Linux system: 

git clone https://github.com/kmmatthews15/vendomatic.git

1. npm install
2. cd client && npm install
3. to start the production server cd back into main repo and run 'node server.js'
4. cd back into the client folder and run 'npm start' to start the React front end!

## experience/ things I wish to implement
During this process the front end came super easy to me. It didn't take me to long to implement any of it in React. 

