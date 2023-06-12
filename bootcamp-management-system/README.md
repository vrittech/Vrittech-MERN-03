

Bootcamps:
- Retrieve a list of bootcamps from the database, allowing pagination, field selection, result limiting, and filtering by specific criteria.
- Search for bootcamps.
- Fetch information about a single bootcamp.
- Allow authenticated users with the "publisher" or "admin" role to create new bootcamps, with field validation and restrictions on the number of bootcamps per publisher.
- Enable bootcamp owners to upload photos for their bootcamps.
- Allow bootcamp owners to update their bootcamp information, with validation on the update.
- Provide a mechanism for bootcamp owners to delete their bootcamps.
- Calculate and display the average cost of all courses offered by a bootcamp.
- Calculate and display the average rating of reviews for a bootcamp.

Courses:
- List all courses associated with a specific bootcamp.
- List all courses in general, with support for pagination, filtering, etc.
- Retrieve information about a single course.
- Only authenticated users with the "publisher" or "admin" role, or the owner of a bootcamp, can create new courses.
- Allow the owner of a course to update its information.
- Permit the owner of a course to delete it.

Reviews:
- Retrieve a list of reviews for a specific bootcamp.
- List all reviews in general, with support for pagination, filtering, etc.
- Fetch information about a single review.
- Only authenticated users with the "user" or "admin" role can create reviews.
- Allow the owner of a review to update it.
- Permit the owner of a review to delete it.

Users & Authentication:
- Implement JWT/cookies-based authentication, with tokens and cookies expiring in 30 days.
- Allow users to register as either "users" or "publishers", with hashed passwords.
- Enable user login using email and password, with token and cookie generation upon successful login.
- Provide a logout mechanism that invalidates the user's cookie.
- Allow retrieval of the currently logged-in user based on the token.
- Implement a password reset functionality, including the generation of a hashed token sent via email for resetting the password.
- Implement endpoints for updating user information and password, restricted to authenticated users.
- User management, including CRUD operations, is restricted to administrators.
- Administrators have the ability to grant admin privileges manually.

Security:
- Encrypt passwords and reset tokens for enhanced security.
- Implement measures to prevent cross-site scripting (XSS) attacks.
- Safeguard against NoSQL injections.
- Apply rate limiting to restrict requests to 100 per 10 minutes.
- Protect against HTTP parameter pollution.
- Enhance security by setting appropriate headers using helmet.
- Allow public access to the API using CORS (Cross-Origin Resource Sharing) for now.

Documentation:
- Create Swagger documentation to provide comprehensive API documentation.

TESTING
- Write test cases using jest

CONTAINERIZING APPLICATION
- Write docker file for backend, build a image and run it in a container mapping it to a PORT.

Deployment:
- Push the project to a GitHub repository.
- Utilize PM2 process manager for managing the application.
- Enable the firewall (ufw) and open necessary ports.
- Configure an NGINX reverse proxy for port 80.

