# Sparked Backend API

## Overview
The Sparked Backend API is a Node.js and Express REST API designed to manage various educational resources, including users, courses, programs, schools, subjects, topics, and units. This API provides endpoints for user authentication and resource management, ensuring a modular and maintainable codebase.

## Project Structure
```
sparked-backend
├── src
│   ├── app.ts
│   ├── server.ts
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── types
│   └── utils
├── tests
├── package.json
├── tsconfig.json
├── .env.example
├── .gitignore
└── README.md
```

## Planning Phase

### 1. **src/app.ts**
- Initializes the Express application.
- Sets up middleware for request parsing, authentication, and error handling.
- Configures routes for the API.

### 2. **src/server.ts**
- Starts the server and listens on a specified port.
- Handles server-related configurations.

### 3. **src/config**
- **database.ts**: Configuration for connecting to the database.
- **environment.ts**: Loads environment variables.
- **index.ts**: Exports configuration settings.

### 4. **src/controllers**
- Contains controller files for handling requests and responses:
  - **authController.ts**: Handles authentication-related requests.
  - **courseController.ts**: Manages course-related operations.
  - **programController.ts**: Manages program-related operations.
  - **schoolController.ts**: Manages school-related operations.
  - **subjectController.ts**: Manages subject-related operations.
  - **topicController.ts**: Manages topic-related operations.
  - **unitController.ts**: Manages unit-related operations.
  - **userController.ts**: Manages user-related operations.
  - **index.ts**: Exports all controllers.

### 5. **src/middleware**
- Contains middleware functions:
  - **auth.ts**: Middleware for authentication checks.
  - **errorHandler.ts**: Handles errors globally.
  - **validation.ts**: Validates incoming requests.
  - **index.ts**: Exports all middleware.

### 6. **src/models**
- Contains model definitions for the database:
  - **Course.ts**, **Program.ts**, **School.ts**, **Subject.ts**, **Topic.ts**, **Unit.ts**, **User.ts**: Define schemas and methods for each model.
  - **index.ts**: Exports all models.

### 7. **src/routes**
- Contains route definitions:
  - **auth.ts**, **courses.ts**, **programs.ts**, **schools.ts**, **subjects.ts**, **topics.ts**, **units.ts**, **users.ts**: Define routes for each resource.
  - **index.ts**: Exports all routes.

### 8. **src/services**
- Contains service files for business logic:
  - **authService.ts**, **courseService.ts**, **programService.ts**, **schoolService.ts**, **subjectService.ts**, **topicService.ts**, **unitService.ts**, **userService.ts**: Implement business logic for each resource.
  - **index.ts**: Exports all services.

### 9. **src/types**
- Contains TypeScript type definitions:
  - **index.ts**: Defines and exports types used throughout the application.

### 10. **src/utils**
- Contains utility functions:
  - **constants.ts**: Defines constants used in the application.
  - **helpers.ts**: Helper functions for various tasks.
  - **processCodes.ts**: Defines process codes for handling responses.
  - **validation.ts**: Validation utility functions.

### 11. **tests**
- Contains test files for controllers, services, and utilities.

## Functionality
- The API provides endpoints for:
  - User authentication
  - Course management
  - Program management
  - School management
  - Subject management
  - Topic management
  - Unit management
  - User management

- Each controller handles incoming requests, interacts with the corresponding service, and returns responses.
- Middleware is used for authentication, error handling, and request validation.
- Models define the structure of data stored in the database.
- Services encapsulate business logic and interact with models.

## Getting Started
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables in a `.env` file based on the `.env.example`.
4. Run the server using `npm start`.

## License
This project is licensed under the MIT License.