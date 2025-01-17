# WanderWise - Client Side

## Overview
WanderWise is a comprehensive tourism management platform that enhances travelers' experiences by offering well-structured trip packages, user stories, and seamless booking options. This README file covers the client-side implementation of the project.

---

## Features
1. **Responsive Design**:
   - Fully responsive for mobile, tablet, and desktop.
2. **Homepage**:
   - Banner/Slider section to showcase the highlights.
   - Tourism and Travel Guide section with tabs for "Our Packages" and "Meet Our Tour Guides".
   - Tourist Story section with featured user stories and sharing options.
3. **Trips Page**:
   - Displays all available trip packages with search, filter, and sorting options.
4. **Stories Page**:
   - Displays all user stories with pagination and social sharing.
5. **User Authentication**:
   - Login, Registration, and Google Authentication.
6. **Protected Routes**:
   - Users must log in to add stories, share stories, or book trips.
7. **Dashboard**:
   - Separate dashboards for Tourists, Guides, and Admins with appropriate options.
8. **Sweet Alerts**:
   - Notifications for CRUD operations, successful authentication, and bookings.

---

## Packages
- **@stripe/react-stripe-js**: React components for Stripe.js integration.
- **@stripe/stripe-js**: Stripe.js library for handling payments.
- **axios**: Promise-based HTTP client for making API requests.
- **dotenv**: Loads environment variables from a .env file.
- **firebase**: Firebase SDK for authentication and other services.
- **framer-motion**: Library for animations in React.
- **react**: JavaScript library for building user interfaces.
- **react-datepicker**: Datepicker component for React.
- **react-dom**: Entry point to the DOM and server renderers for React.
- **react-helmet-async**: Library for managing changes to the document head.
- **react-hook-form**: Library for managing form state in React.
- **react-icons**: Collection of popular icons for React.
- **react-modal**: Accessible modal dialog component for React.
- **react-query**: Hooks for fetching, caching, and updating asynchronous data in React.
- **react-router-dom**: Declarative routing for React applications.
- **react-share**: Social media share buttons and share counts for React.
- **react-tabs**: Accessible tabs component for React.
- **react-toastify**: Library for displaying toast notifications in React.
- **swiper**: Modern mobile touch slider with hardware-accelerated transitions.
- **yup**: JavaScript schema builder for value parsing and validation.

---

## Project Structure
```plaintext
src/
├── components/       # Reusable components (Navbar, Footer, etc.)
├── pages/            # Page components (Home, Trips, Stories, etc.)
├── context/          # Context API for global state management
├── hooks/            # Custom hooks (e.g., for authentication, API calls)
├── services/         # API service functions (Axios integration)
├── assets/           # Images, icons, and static assets
├── styles/           # Global and component-specific styles
└── App.js            # Main application component with routing
```

---

## Tech Stack
- **Frontend Framework**: React.js
- **State Management**: React Context API
- **Styling**: Tailwind CSS and custom CSS
- **Routing**: React Router DOM
- **Data Fetching**: Axios
- **Authentication**: Firebase Authentication (Email/Password & Google OAuth)
- **Notifications**: React Toastify / SweetAlert

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wanderwise-client.git
   ```
2. Navigate to the project directory:
   ```bash
   cd wanderwise-client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   REACT_APP_BACKEND_API_URL=http://localhost:5000/api
   ```
5. Start the development server:
   ```bash
   npm start
   ```

---

## Folder Details

### `components/`
- Contains reusable components like Navbar, Footer, Tabs, etc.

### `pages/`
- **Home**: Contains homepage sections like Banner, Stories, and Packages.
- **Trips**: Displays all available packages with filters and sorting.
- **Stories**: User-added stories with sharing options.
- **Login/Register**: Authentication pages for users.
- **Dashboard**: Role-specific dashboards for managing profiles, bookings, and stories.

### `context/`
- Global state management using React Context API (e.g., AuthContext for user authentication).

### `hooks/`
- Custom hooks for fetching data, authentication, and other utilities.

### `services/`
- Axios-based service functions for API interactions (e.g., `getTrips`, `addStory`).

---

## Scripts

- **Start Development Server**:
  ```bash
  npm start
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Lint Code**:
  ```bash
  npm run lint
  ```

---

## Deployment
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `build/` folder to a hosting platform like Netlify, Vercel, or Firebase Hosting.

---

## Links
- **Live Site**: [https://wanderwise.com](https://wanderwise.com)
- **Backend Repository**: [https://github.com/your-username/wanderwise-backend](https://github.com/your-username/wanderwise-backend)
- **Frontend Repository**: [https://github.com/your-username/wanderwise-client](https://github.com/your-username/wanderwise-client)

---

## Contributors
- **Your Name** (Developer)
  - GitHub: [https://github.com/your-username](https://github.com/your-username)
  - LinkedIn: [https://linkedin.com/in/your-linkedin](https://linkedin.com/in/your-linkedin)

---

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

