# Food in Film / Mod 3 Project Backend

This is my Mod3 project for the PerScholas Software Engineering course.

Click [here][1] for the live site link to my project.
Click [here][3] to view the front end of the project.

## Project Description
***
For the Per Scholas Module 3 Project, we are tasked with creating a working full-stack application using the MERN stack with at least one model with full CRUD and the option of including two separate models. I decided to create an application that would allow users to view recipes of food they have possibly seen in animated films and critique them. So I created a backend based around three models: Users, Reviews, and Foods.

## Routes
***

   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
POST | /api/login | logs in user  |
POST | /api/signup | signs up a user |
GET | /api/review | returns database of all reviews |
GET | /api/review/:id | returns one selected review  |
POST | /api/review | creates a new review |
PUT | /api/review/:id | edit/update review |
DELETE | /api/review/:id | delete a review|
GET | /food | returns database of all recipes  |
GET | /food/:id | shows one selected recipe |



## Approach Taken
For this project, I knew I wanted to have a database of receipes that the user would not be able to edit. So I created a Food model that only I could create entries in and that would appear static to the user. Second, I want the user to be able to rate and write notes on or save recipes they have tried or would like to try. So, I created a Review model. This model would be full CRUD. Almost every section in INDUCES besides New and Edit are coded in the backend. To code the back-end, I used our class notes and our Todo-app example as a guide and also attempted to keep in mind seperation of concerns as I organized my code. 

I wanted to implement authorization and authentication to give the user a more customized expereince so I created a user model and looked for outside resources to accomplish this task. Specifically [this][2] youtube video was helpful in understanding the logic behind authentication and authorization within a mern stack app.



## Technologies Used
***
* Javascript
* NodeJS
* MongoDB
* Express

### NPM Packages Installed
* nodemon
* cors
* express
* mongoose
* dotenv
* bcrypt
* jsonwebtoken


## Installation
***
Fork and clone the repository
```
$ git clone https://github.com/yourusername/repositoryname
```
Go to the project directory
```
$ cd repositoryname
```
Install dependencies
```
$ npm i
```
Run nodemon and open local host in browser to see the project
```
$ nodemon
```

## Future Plans
***
I wanted to include some more features in this back-end.

#### Authentication
* Make the distinction between an admin and a regular user inside the User model.
   * This would make it easier to add a feature to manipulate the Food model and have authenticated admin users have access to it through logging in. 

#### Food Model
* As of now, the only way to update the food model is through seeding the databse, as I didn't have time time to implement it in the frontend. 

[1]:https://foodinfilm.herokuapp.com/ "live site"
[2]:https://www.youtube.com/watch?v=WsRBmwNkv3Q&list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT "youtube link"
[3]:https://github.com/LarissaPortillo/food-frontend "front end"
