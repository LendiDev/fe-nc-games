# NC BoardGames Front-End
Welcome to the NC BoardGames Front-End repository! This project is a front-end React application that serves as a platform for board game enthusiasts to share and explore reviews, comments, users, and categories related to board games.

Users can access reviews on board games from other users and leave comments on those reviews. They can also post and delete comments for the reviews, as well as up vote and down vote reviews as well as comments. Additionally, users can sort reviews by category, order by title, date, number of comments, and more.

<img src="https://i.ibb.co/XDyfcPN/Screenshot-2023-03-19-at-22-31-26.png" alt="Screenshot of Reviews page" width=50%>

## Deployed Version
Check out the live version of the app here: https://nc-bg.netlify.app/

## Back-End Repository
The back-end for this project is hosted in a separate repository. You can find it here: https://github.com/LendiDev/backend-nc-games

## Challenges Faced
Throughout the development of the NC BoardGames Front-End, I faced several challenges that helped me grow as a developer and improve the overall quality of the project. Some of the key challenges include:

1. <b>State management</b>: Handling complex state interactions and ensuring that data was properly passed down through components required careful planning and implementation. I utilized React's built-in state management, as well as custom hooks and context, to address these challenges.

2. <b>Responsive design</b>: Creating a responsive and user-friendly design that works seamlessly on various devices and screen sizes was a priority. I used CSS Grid, Flex, and media queries to ensure our app looks great and functions well on a wide range of devices.

3. <b>Optimizing performance</b>: Ensuring that the application performed well, especially when dealing with large amounts of data, was a challenge. I employed pagination to improve the app's overall performance.

4. <b>Asynchronous data fetching</b>: Managing API calls and handling errors gracefully was another challenge I faced. I used the `axios` library to make API calls and implemented error handling to ensure a smooth user experience.

Overall, these challenges not only helped me improve the quality of the NC BoardGames Project but also taught me valuable lessons that I will carry forward in any future projects.

## Prerequisites
Node.js (minimum version: 14.x.x)

To check your Node version, run the following command in your terminal:

```sh
node --version
```
Make sure your Node version is at least 14.x.x.

## Running the Project Locally
To run the project on your local machine, follow these steps:

Clone the repository:
```sh
git clone https://github.com/LendiDev/fe-nc-games.git
```

Change into the project directory:
```sh
cd fe-nc-games
```

Install the required dependencies:
```sh
npm install
```

Start the development server:
```sh
npm start
```

The application should now be running on http://localhost:3000.

## Usage 
Once the app is running, you can:

* Browse through the list of board game reviews
* Filter reviews by categories
* Sort reviews (in asc or desc order) by title, date, number of comments, and more
* View detailed information about individual reviews and their associated comments
* Add and delete comments on reviews
* Up vote and down vote reviews and comments

Happy exploring!




