Architecture

Compare and contrast the types of frontend development you used in your full-stack project, including Express, HTML, JavaScript, and the single-page application (SPA)

One part of the site used Express, HTML, and JavaScript to render and display pages. Express and JavaScript were used to define routes and controllers that handle browser requests. When a request was received, Express either served a static HTML file or dynamically generated a page using Handlebars templates populated with data from the database. These technologies worked together to process server requests and deliver content to the frontend client.
The Angular portion of the project followed a different approach. On the initial page load, the entire single-page application (SPA) was delivered to the client. After loading, all rendering and code execution occurred within the browser on the client side. Backend requests were only required when retrieving data from the database. In the Express-based approach, the browser made repeated requests to the server whenever pages were loaded or refreshed. In contrast, an SPA requires a larger initial load because all application code must be downloaded upfront, but afterward, users can navigate between pages without additional server requests.

Why did the backend use a NoSQL MongoDB database?

Since MongoDB provides strong scalability and fast query performance, it is well-suited for applications that need to manage growing amounts of data efficiently. Its document-based structure closely matches JSON formatting, making integration with front-end applications straightforward and efficient.

Functionality

How is JSON different from JavaScript, and how does JSON tie together the frontend and backend development pieces?

JSON is a data formatting standard used to structure and exchange information across different programming languages. JavaScript, a programming language, commonly uses JSON-like syntax to represent objects and manage data. Communication between the frontend and backend is achieved through APIs and JSON, with RESTful APIs relying on JSON to process requests and deliver responses.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

One example of improving functionality through refactoring was replacing static HTML pages with Handlebars templates. This made it possible to reuse page layouts while dynamically updating the content displayed. Another improvement involved migrating the data used to populate those templates from static JSON files within the codebase to MongoDB. By storing content in the database, updates and additions can be made without requiring code modifications or redeployment of the website.

Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full-stack application.

HTTP methods define the different types of interactions that can occur between a client and a server. Common HTTP methods include GET, POST, PUT, and DELETE, each serving a specific purpose for requesting, creating, updating, or removing data. API endpoints provide communication channels through which clients interact with the server. In this full-stack application, security was implemented through user authentication and the issuance of a valid JWT (JSON Web Token), which granted access to protected API endpoints.

Reflection

How has this course helped you in reaching your professional goals?

This course expanded my understanding of full-stack development and introduced me to technologies I had not previously worked with, such as Express. In my professional experience as a full-stack developer, I have primarily contributed to existing applications rather than building one from the ground up. Working through this project provided valuable insight into the development process and helped me better understand how the different components of a full-stack application integrate and function together.

What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

My JavaScript skills improved through the hands-on experience gained in this course. It also provided an opportunity to work with JavaScript on the backend using Node.js and Express, expanding my understanding beyond frontend development, since knowledge of Node.js is frequently listed as a required or preferred qualification for many development roles. Gaining foundational experience with this widely used technology has been especially valuable.
