# Twitter Clone Frontend

This is the frontend part of the Twitter clone project, built with React, Vite, and TypeScript. It utilizes the state management library React-Query, along with UI frameworks DaisyUI and Tailwind CSS for styling and appearance. The project is fully written in TypeScript and includes efficient form handling with React-Hook-Form library and validation with Zod. It connects to the backend API using REST API calls.

## Features

-   **React**: Utilizes the React library for building user interfaces.
-   **Vite**: Uses Vite for fast and efficient development.
-   **TypeScript**: Fully written in TypeScript for type safety and better development experience.
-   **React Query**: Manages server state in React applications with ease.
-   **DaisyUI and Tailwind CSS**: Provides utility-first CSS framework for styling and UI components.
-   **React Hook Form**: Efficiently handles forms with React applications.
-   **Zod**: Validates data with TypeScript and runtime validation.

## Authentication and Authorization

The application uses a token-based authentication system with access and refresh tokens to restrict user access and ensure secure communication.
It also uses axios intercaptors to automatically attach the access token to outgoing requests and handle token refreshing seamlessly. For example, if user spend some time without page reloading it, so access token would expire, during the next user action axios would firstly check the response for a forbidden error (403) and would try to refresh the token. Once a new access token is obtained, it resends the failed request with the new token. Such behavior gives the user a smooth website experience.

### Process Overview

1. **User Login**:

    - The user provides their credentials (email and password) to log in.
    - The server verifies the credentials and issues an access token back in a response and also creates a http-only cookie with a refresh token.
    - Front end app saves access token in local cache.

2. **Access Token**:

    - The access token is a short-lived token used to authenticate the user for accessing protected resources.
    - It is included in the Authorization header of every request to the backend API.

3. **Refresh Token**:

    - The refresh token is a long-lived token used to obtain a new access token when the current access token expires.
    - It is stored in a http-only cookie in a browser and in a database in user model.

4. **Token Refresh**:

    - When the access token expires, the frontend sends the refresh token to the server to request a new access token.
    - If the refresh token is valid, the server issues a new access token.

5. **Logout**:
    - The user can log out, which involves invalidating both the access token and the refresh token.

## Getting Started

### Prerequisites

-   Node.js
-   npm or yarn

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/ineff3/twitter-frontend.git
    cd twitter-frontend
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Set up environment variables:

-   Create `.env` file in the root of a project and add the following line making sure the URL matches the server:
    ```
    VITE_API_BASE_URL='http://localhost:3000/'
    ```

4. Start the development server:
    ```
    npm run dev
    ```
