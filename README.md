# vend-o-matic

You are responsible for designing a service which will support a beverage vending machine that is tessted VIA HTTP before being place into an production environment

## constraints 
1. Machine only accepts US quarters - you physically cannot put anything else in, and you  can only put one coin in at a time.  (sort of completed. the user can put in other coins but used an alert to prompt the user to get change back. still working on the logic for this)
2. Purchase price of an item is two US quarters. (completed)
3. Machine only holds five of each of the three beverages available to purchase in its inventory.  (completed)
4. Machine will accept more than the purchase price of coins, but will only dispense a single  beverage per transaction. (sort of completed)
5. Upon transaction completion, any unused quarters must be dispensed back to the  customer. (completed)
6. All test interactions will be performed with a single content type of “application/json”. (not yet completed)

## installation
First clone the repo somewhere on your Mac/Linux system: 

git clone <https://github.com/kmmatthews15/vendomatic.git>

1. npm install
2. to start the production server run 'node server.js'
3. cd into client && npm install
4. run 'npm start' to start the React front end

## experience/ things I wish to implement
During this process the front end came super easy to me. It didn't take me too long to implement any of it in React. I did however run into some issues with connecting the backend to the React front end, and configuring all of the specifications. So one of my next goals is testing to complete some testing to make sure all of the specifications are correct. Another goal that I have is to get it deployed to Heroku!