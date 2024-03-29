# Facebook Clone

A reimagined version of the [Facebook](https://www.facebook.com/) platform owned by [Meta Platforms, Inc](https://en.wikipedia.org/wiki/Meta_Platforms). This clone is developed using the JavaScript frameworks React and Next.js, complemented with the utility-first CSS framework, TailwindCSS. For authentication and data persistence, Google Cloud Storage and Firebase have been integrated.

🔍 Frameworks & Tools:

- **React**: [https://react.dev/](https://react.dev/)
- **Next.js**: [https://nextjs.org/](https://nextjs.org/)
- **TailwindCSS**: [https://tailwindcss.com/](https://tailwindcss.com/)

## 🌐 Live Demo

Experience the live version of the application [here](https://facebook-clone-version2.vercel.app/).

## 🌟 Key Features

- Authenticates users with Next.js.
- Enables image uploads.
- Optimized with Server Side Rendering (SSR).
- Designed responsively using TailwindCSS.

## 🖼️ Preview

![Fb Thumbnail](fb_thumbnail.png)

## 📚 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  
## 🛠️ Installation

Follow these steps to install and run the project on your local machine:

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: [Install Node.js](https://nodejs.org/)
- **npm (Node Package Manager)**: Included with Node.js

### Clone the Repository

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Sadhvi10/facebook-clone.git

### Start the development server

2. Install npm and start the development server (localhost:3000) using the following command:

   ```bash
   npm i && npm run start

## 🚀 Usage

### Configuration

To set up and configure this project to work with Firebase, follow these steps:

1. **Firebase Account**: Ensure you have a Firebase account. If you don't have one, you can sign up for free at [Firebase](https://firebase.google.com/).

2. **Firebase Project**:
   - Create a new Firebase project in the Firebase Console.
   - Once your project is created, note down your Firebase Project ID and API Key.

3. **Environment Variables**:
   - In the root directory of this project, create a file named `.env` if it doesn't already exist.
   - Add the following environment variables to the `.env` file:

     ```dotenv
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```

   Replace the placeholders (`your_api_key`, `your_project_id`, `your_sender_id`, `your_app_id`, `your_measurement_id`) with your actual Firebase credentials.

### Next.js Authentication

[Next.js](https://nextjs.org/) offers an integrated approach to user authentication in React applications, and it has been leveraged in this Facebook clone for several reasons:

Session Management:
- With Next.js, sessions are managed efficiently. Once a user logs in, their session details are retained securely, ensuring they remain authenticated until they opt to log out or their session naturally expires.
Extensibility with Third-party Providers:
- This clone is structured in a way that it can potentially allow users to sign in using third-party providers such as Google, Facebook, or Twitter, all thanks to the flexibility of Next.js authentication.
Enhanced Security:
- Security is paramount, especially for platforms like Facebook. Therefore, all passwords are hashed and salted; plain text storage is avoided at all costs.




