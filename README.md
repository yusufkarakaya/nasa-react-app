# NASA React App

This is a simple NASA Astronomy Picture of the Day (APOD) app built with React, fetching data from NASA's API and displaying it on the main screen. The app uses local storage to cache data for each day.

## Live Demo

You can check out the live app here: [NASA React App](https://nasa-react-app-taupe.vercel.app/)

## Features

- Fetches daily APOD data from NASA's API.
- Caches the data in local storage to avoid unnecessary API calls.
- Displays the main content in the `Main` component.
- `Sidebar` is toggleable to show additional content.
- Loading state is shown while the data is being fetched.
- The `Footer` component provides additional actions like toggling the sidebar.

## Technologies Used

- **React** for UI development.
- **NASA APOD API** to fetch the daily picture and details.
- **Vercel** for deployment.
- **LocalStorage** for caching data.
