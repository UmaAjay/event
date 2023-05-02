#Cloning Video Watch
# <a href="https://www.loom.com/share/e592baa10c23416ca5790329e529f49c">Click here to watch</a>


Event Management System
Welcome to the Event Management System! This is a web application that allows users to create and view events based on various categories and locations.

Technologies Used
This project was built using the MERN stack:
Client :https://umaajayclient.onrender.com/
Server:https://umaajay.onrender.com/event
MongoDB: A document-based NoSQL database used to store event data
Express.js: A web application framework used to build the backend server
React.js: A frontend library used to build the user interface
Node.js: A JavaScript runtime used to build the server-side code
Getting Started
To get started with this project, follow these steps:

Clone this repository by running the following command in your terminal: git clone https://github.com/UmaAjay/event.git
Navigate to the root directory of the project
Install the required dependencies for the client by running the command cd client && npm install
Start the client by running the command npm start
Open a new terminal window and navigate to the root directory of the project
Install the required dependencies for the server by running the command cd server && npm install
Create a .env file in the server directory and add the required environment variables (DB_URL, PRIVATE_KEY, PORT, COOKIE)
Start the server by running the command npm start
Open your web browser and navigate to http://localhost:3001
Features
This application has the following features:

User authentication using JWT using Mongodb
Event creation with basic details such as event name, start time, end time, location, description, category, and banner image
Listing page to view all events and filter by date, city, and category
Filters for cities and categories based on the selected date


CORS (Cross-Origin Resource Sharing) is a security mechanism implemented in web browsers that prevents web pages from making requests to a different domain than the one that served the page. This is a security measure that helps protect users from malicious attacks.

When you are building a web application that makes requests to a different domain than the one that served the page, you will need to enable CORS on the server-side to allow those requests to be processed.

In the case of this Event Management System, if you are using a live server to host your application, you will need to enable CORS in order for your application to function correctly. You can use a middleware package like cors to enable CORS on your Node.js server.

Here are the steps to enable CORS in your Node.js server using the cors package:

Install the cors package by running the command npm install cors in your server directory.
Import the cors package in your server code by adding the following line of code at the top of your server.js file: const cors = require('cors');
Use the cors middleware in your server code by adding the following line of code before your routes: app.use(cors());
By enabling CORS in your server code, you are allowing requests from other domains to be processed by your server. This is important if you want your web application to be able to make requests to other domains in order to retrieve data or perform other actions.

About
client and server
server:  https://umaajay.onrender.com/event

client :   https://umaajayclient.onrender.com


Contributing
If you would like to contribute to this project, please create a pull request and describe your changes.

Credits
This project was created by Uma Ajay Kumar Reddy PS. If you have any questions or issues, please contact me at umaveena.alvas@gmail.com.

Thank you for using the Event Management System!
