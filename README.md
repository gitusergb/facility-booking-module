# Facility Booking Module

This project is a simple facility booking module for an apartment complex, developed using React for the frontend and Node.js with Express for the backend. Residents can book facilities like the Clubhouse and Tennis Court for personal use.

## Features

- Book Clubhouse or Tennis Court for a specific date and time range.
- Prevent double bookings for the same facility and time range.
- Calculate booking amount based on specified rates and times.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express

## Installation

### Backend

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/facility-booking-module.git
   cd facility-booking-module
   ```

2. Navigate to the `backend` directory:
   ```
   cd backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   node index.js
   ```

   The backend server will run on `http://localhost:3000`.

### Frontend

1. Open a new terminal and navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

   The React application will run on `http://localhost:3001`.

## Usage

1. Open the React application in your web browser:
   ```
   http://localhost:3001
   ```

2. Use the form to book a facility by selecting the facility, date, and time range.

3. Submit the form to make a booking. The application will display whether the booking was successful or failed due to an existing booking.

## Booking Rates

- **Clubhouse**:
  - 10am to 4pm: Rs. 100/hour
  - 4pm to 10pm: Rs. 500/hour
- **Tennis Court**: Rs. 50/hour

## Example Scenarios

### Input: Clubhouse, 26-10-2020, 16:00-22:00
**Output**: Booked, Rs. 1000

### Input: Tennis Court, 26-10-2020, 16:00-20:00
**Output**: Booked, Rs. 200

### Input: Clubhouse, 26-10-2020, 16:00-22:00
**Output**: Booking Failed, Already Booked

### Input: Tennis Court, 26-10-2020, 17:00-21:00
**Output**: Booking Failed, Already Booked


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Contact

For any questions or suggestions, please contact 

 <a href="mailto:g4ur131@gmail.com">
    <img align="left" alt="GauriB | Gmail" width="26px" src="https://www.vectorlogo.zone/logos/gmail/gmail-icon.svg" />
  </a>



<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
