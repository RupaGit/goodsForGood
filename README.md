# goodsForGood
A community trading application that will help you get the goods you need when local stores have been wiped out.

## Description
The global pandemic of 2020 that affected billions of people all over the world created a situation where locating and purchasing essential items became difficult and dangerous. With Goods for Good, we wanted to create an environment where it is easy and safe to find essential items in your local community and trade with others. Goods for Good uses your location to show you local trades and lets you create and post your own trades. We hope you enjoy it and find the goods you need!


## Technologies/Libraries Used:
* Node.js <https://nodejs.org/en/>
* Express <https://expressjs.com/>
* MongoDB / Mongoose: <https://www.mongodb.com/> <http://mongoosejs.com/>
* React.js <https://facebook.github.io/react/>
* Auth0 <https://github.com/auth0/>
* Axios <https://github.com/mzabriskie/axios/>
* Socket.iO <https://github.com/socketio/socket.io>
* Semantic-UI <https://github.com/Semantic-Org/Semantic-UI>
* Passport <https://www.npmjs.com/package/passport-github> <http://www.passportjs.org/>
* Nodemailer <https://github.com/nodemailer/nodemailer> <https://nodemailer.com/about/>


## Project Members: 
### Guy Yaffe Ermoza - <https://github.com/guyyaffear>
Guy worked on primarily the front end by creating the navigation, the background animation, styling, and implementing nodemailer.
### Javits Arias - <https://github.com/jav1ts>
Javits worked on creating the reusable React components such as the forms and modals used throught the page using Semantic UI and helped with creating the API routes.
### Swarupa Popuri - <https://github.com/RupaGit>
Rupa worked on primarily the backend by setting up the routes to post and read from the Mongo database, setup user login and authentication with Auth0, Passport, and Socket.io


## Instructions to run this application on your machine:

1. Clone this repo to your computer and open the terminal to run a MongoDB database on your machine. See info here: <https://www.mongodb.com/> <http://mongoosejs.com/>
2. Once you have cloned the repo, open another terminal, CD into the goodsForGood directory, then run the command "npm run start:prod" to activate the server for this app.
3. Once you have the server running, open another terminal, CD into the goodsForGood directory, then run the command "npm run client" to activate the client for this app.


When the app first loads, you will be on the home page where you will go to the "Log In / Sign up" tab on the upper right of the navigation bar.
<img width="1122" alt="Screen Shot 2020-07-31 at 4 17 26 PM" src="https://user-images.githubusercontent.com/55659287/89078231-f71e6f00-d351-11ea-8d8c-b4fc99153eee.png">

On the sign up page, you can create a user account by providing your name, email, password (at least 6 characters long), and zip code (which will automatically populate if you allowed the app to use your location)
<img width="1120" alt="Screen Shot 2020-07-31 at 4 19 24 PM" src="https://user-images.githubusercontent.com/55659287/89078389-5b413300-d352-11ea-805f-02fa57d56e5b.png">

Once you create a username and sign in, the navigation will now give you access to the Dashboard
<img width="1119" alt="Screen Shot 2020-07-31 at 4 20 15 PM" src="https://user-images.githubusercontent.com/55659287/89078689-dd315c00-d352-11ea-984c-cf26c233aebe.png">

The Dashboard will give you the ability to add a trade, view your created trades, view your pending and favorited trades
<img width="1119" alt="Screen Shot 2020-07-31 at 4 21 04 PM" src="https://user-images.githubusercontent.com/55659287/89078873-339e9a80-d353-11ea-88e2-2cffc95e4ea6.png">

When you select to add a trade, a modal will pop up which will prompt you to enter the item and quantity you are trading and the item and quantity you are requesting
<img width="1119" alt="Screen Shot 2020-07-31 at 4 22 28 PM" src="https://user-images.githubusercontent.com/55659287/89078950-6e083780-d353-11ea-8dec-ca5adb6cac65.png">

Once you create a trade, you can view all the other trades made from other users in your zip code
<img width="1120" alt="Screen Shot 2020-07-31 at 4 25 43 PM" src="https://user-images.githubusercontent.com/55659287/89079017-9132e700-d353-11ea-919a-37f8fb0f63f4.png">

If you see a trade that you want to make, you can send a message to the user who made the trade to arrange the trade
<img width="1117" alt="Screen Shot 2020-07-31 at 4 27 44 PM" src="https://user-images.githubusercontent.com/55659287/89079096-bb84a480-d353-11ea-99f6-982accb72153.png">

You can also post and view posts from other users on the Community Feed tab on the navigation bar which has information on deals for hard to get items in local stores
<img width="1121" alt="Screen Shot 2020-07-31 at 4 30 21 PM" src="https://user-images.githubusercontent.com/55659287/89079209-f555ab00-d353-11ea-88f1-b843c9428287.png">




