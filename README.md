# ConcertTracker
Hi! Thanks for checking out Concert Tracker. This project was created using **MySQL, React, Node.js, and Express.js** for CS348: Information Systems at Purdue University.


## Features of our app
### Registration/Login/Logout
- Registration page creates a user's profile on Concert Tracker
  - Gathers email, password, username, name, age, and favorite artist
  - Creates an entry in the Users table of our database (DB)
- Login/Logout
  - Saves user's data so that the next time they log in, everything is as it was

### Concerts Page
- Users are able to insert concert information like: artist name, tour name, and date of concert
  - Creates an entry in the Concerts table in DB
- They also have the ability to update and delete specific Concert instances
  - Updates and deletes an entry in the Concerts table in DB

### Artists Page
- Users are able to insert artist information about the musicians they listen to
- They can insert information like: artist name and genre
  - Creates an entry in the Artists table in DB
- They also have the ability to update and delete specific Artist instances
  - Updates and deletes an entry in the Artists table in DB

### Locations Page
- Users are able to insert location information in order to help them keep track of where they were on specific days; incredibly useful when trying to determine where a concert took place
- Users are able to insert information like: city name, state name, venue name, section number, and date
  - Creates an entry in City table (city name, state name, date)
  - Creates an entry in Venue table (venue name, section number, date)

### Reports Page
- **Report 1: Who went to your show?**
  - Have you ever wondered which users went to a tour in a specific city? This is a great way of seeing which users are in your area and enjoy the same artist as you!
  - 
- **Report 2: What concerts were held at this venue?**
  - Have you ever wondered about what other concerts were ever held at a venue? Just type in the name of the venue and we'll tell you all the concerts our users have been to at this venue!
- **Report 3: What is the average age of users with same favorite artist?**
  - Have you ever wondered about the average age of people who have the same favorite artist? Just type in the name of the artist and we'll tell you their fanbase's average age!
- **Report 4: What concerts did I go to between two dates?**
  - Have you ever wondered about which concerts you went to during a specific date range? Just type in the two dates and we'll list all the concerts you went to!


## Demo Video
Here's a link to our demo: *coming soon*
