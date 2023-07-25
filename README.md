# City-Explorer

**Author**: Adnan Mohamud

**Version**: 1.0.0

## Overview

The application is called "City Explorer," and its main purpose is to allow users to search for a city and explore its geographical information, including latitude, longitude, and a static map representation. The application is built using React and utilizes the LocationIQ API to fetch data for the searched city.

## Getting Started

Step 1: Clone the Repository

1. Download or clone the "City Explorer" repository from GitHub.

Step 2: Install Dependencies

1. Open your terminal or command prompt.
2. Change into the project directory.
3. Run `npm install` to install the required dependencies.

Step 3: Get API Key

1. Sign up for a free account on the LocationIQ website [https://locationiq.com/].
2. Obtain your API key from your LocationIQ dashboard.

Step 4: Set Environment Variable

1. Create a new file named `.env` in the project directory.
2. Add the following line to the `.env` file, replacing `<YOUR_API_KEY>` with your LocationIQ API key:

```javascript
REACT_APP_LOCATIONIQ_API_KEY=<YOUR_API_KEY>
```

## Architecture

The "City Explorer" app is a front-end web application built using React. It utilizes HTML, CSS, and JavaScript for page structure, styling, and application logic, respectively. The `axios` library is used to fetch data from the LocationIQ API, which provides geographical information about cities. The app follows a component-based architecture, with the main component being `App`, and additional components include `Table`, `Image`, and `Alert` (currently commented out). The design is focused on a simple and clean user interface, with responsiveness ensured by `react-bootstrap`. Overall, the app aims to provide a user-friendly way to explore geographical data about cities.

## Change Log

## [Version 1.0.0] - 2023-07-20

- Initialized project using Create React App

## [Version 1.1.0] - 2023-07-20

- Added in first Pull Request (PR)
- Included ReadMe instructions
- Installed and added in Axios
- Imported React and Axios into App.js and started working on the City-Explorer project

## [Version 1.2.0] - 2023-07-20

- Added in first Pull Request (PR)
- Included ReadMe instructions
- Installed and added in Axios
- Imported React and Axios into App.js and started working on the City-Explorer project

## [Version 1.3.0] - 2023-07-22

- Added in error handling
- Added in the map
- Added in some data into state

## [Version 1.4.0] - 2023-07-22

- Imported in Bootstrap
- Imported in Table from Bootstrap
- Added in button to explore data
- Added in the city name, latitude and longitude and make it display on a table

## [Version 1.5.0] - 2023-07-24

- Finished adding in the map
- Finished adding in the location
- Added in some CSS to make it look a little more professional

## Credit and Collaborations

Special thanks to:

- Stephen Clemmer
- Brandon Mizutani
- Luke Rogers

## Time Estimates

Name of feature: Setting up React repo and API keys, locations, map, errors

Estimate of time needed to complete: 5 hours

Start time: 1:00 p.m Friday

Finish time: 5:00 p.m Monday

Actual time needed to complete: A day and 4 hours
