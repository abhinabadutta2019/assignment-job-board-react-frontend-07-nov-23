# Job Board Web Application

## Overview

The Job Board Web Application is a platform that connects job creators and applicants, providing a seamless and efficient way for users to post and apply for job positions.

## Backend

### Routes

- **Job Routes**

  - `POST /api/jobs`: Create a job listing (for job creators only).
  - `GET /api/jobs/appliedUsers/:jobId`: Get details of applicants for a specific job (for job creators only).
  - `GET /api/jobs/yourCreatedJobs/:jobId`: Get job details created by the current user (for job creators only).
  - `GET /api/jobs`: Get all job listings.
  - `POST /api/jobs/apply/:jobId`: Apply for a job (for applicants only).
  - `GET /api/jobs/appliedJobs`: Get a list of jobs applied to by the current user.

- **User Routes**
  - `POST /api/users`: Register a new user.
  - `POST /api/users/login`: User login.

### Backend Technologies

- **Node.js:** Server-side runtime environment.
- **Express.js:** Web application framework simplifying routing and middleware.
- **MongoDB:** NoSQL database to store user data, job listings, and applications.
- **Mongoose:** ODM library for MongoDB, providing an elegant interface for database interactions.
- **JWT (JSON Web Tokens):** Used for user authentication and authorization.

## Frontend

### Components

- **App.js:** Main component managing routing using React Router.
- **Auth.js:** Component handling user registration and login.
- **CreateJob.js:** Component for job creation (accessible to job creators only).
- **YourCreatedJobs.js:** Component to display jobs created by the current user (for job creators only).
- **ApplicantsDetails.js:** Component to view details of applicants for a specific job (for job creators only).
- **YourAppliedJobs.js:** Component to display jobs applied to by the current user (for applicants only).
- **Navbar.js:** Navigation bar component.

### Frontend Technologies

- **React:** JavaScript library for building user interfaces.
- **React Router:** Used for client-side routing.
- **React Bootstrap:** Library for responsive and visually appealing UI components.

## Security

- User data and passwords are securely stored in the database.
- JSON Web Tokens (JWT) are used for user authentication and authorization.

## Responsive Design

- The application is designed to be responsive, ensuring a consistent user experience across different devices and screen sizes.

## Links

- **Deployed Frontend Link:** [Job Board Frontend](https://assignment-job-board-react-frontend.onrender.com)
- **Frontend Repository Link:** [GitHub Repository - Frontend](https://github.com/abhinabadutta2019/assignment-job-board-react-frontend-07-nov-23)
- **Backend Repository Link:** [GitHub Repository - Backend](https://github.com/abhinabadutta2019/assignment-job-board-typescript-backend-07-nov-23)

## Conclusion

The Job Board Web Application provides an effective platform for job creators and applicants to connect, facilitating the job posting and application process.
