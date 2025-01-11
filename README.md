# **Quora Platform**

A simple yet functional platform where users can create, update, delete, and view posts using EJS templating and Express.js. This project demonstrates the use of RESTful APIs for managing posts in a web application.

---

## **Features**

- **Create Posts**: Users can add new posts with titles and content.
- **Read Posts**: View all posts on a single page or read individual posts.
- **Update Posts**: Edit the details of an existing post.
- **Delete Posts**: Remove posts from the platform.
- **RESTful APIs**: Follows RESTful design principles for CRUD operations.

---

## **Technologies Used**

- **Node.js**: Backend runtime environment.
- **Express.js**: Web application framework for Node.js.
- **EJS**: Embedded JavaScript templating for rendering dynamic HTML pages.
- **UUID**: For generating unique identifiers for posts.
- **Method Override**: To use HTTP verbs like PUT and DELETE in forms.
- **Nodemon**: For automatic server restarts during development.

---

## **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/ketannibandhe/quora_ejs.git
   cd quora_ejs
1st install packages mentioned in package.json
npm i nodemon
npm i uuid
npm i method override
type localhost:{port No}/posts 


How the RESTful APIs Work
Create Post (POST /posts)

Data is sent via a form.
A unique id is assigned to each post using the UUID package.
The post is added to the data store (e.g., an in-memory array).
View All Posts (GET /posts)

Retrieves all posts and renders them using an EJS template.
View Single Post (GET /posts/:id)

Fetches a specific post using its id and renders its details.
Update Post (PUT /posts/:id)

Data is sent via a form.
The specific post is identified by its id and updated in the data store.
Delete Post (DELETE /posts/:id)

Deletes the post with the specified id from the data store.
