# Terribly Tiny Tales - Word Frequency Histogram

This React application fetches the contents of a text file from the Terribly Tiny Tales website, calculates the frequency of occurrence of each word in the file, and plots a histogram of the 20 most occurring words.

## Components

This application has four main components:

### SubmitButton

This component is used to render the Submit button on the initial page load. When the user clicks the button, the application fetches the contents of the text file and calculates the word frequencies.

### WordFrequency

This component is used to display the word frequencies in a table format. It takes an array of objects containing the word and its frequency as props and renders a table with two columns: Word and Count.

### HistogramChart

This component is used to display the histogram of the 20 most occurring words. It uses the Recharts library to create a bar chart with the words on the X-axis and their frequency on the Y-axis.

### ExportButton

This component is used to export the histogram data as a CSV file. It uses the React-CSV library to create a download link for the CSV file.

## Libraries and Plugins

This application uses the following libraries and plugins:

-   React (v17.0.2): A JavaScript library for building user interfaces.
-   React-DOM (v17.0.2): A package for rendering React components in the browser.
-   Axios (v0.21.1): A promise-based HTTP client for making API calls.
-   Recharts (v2.0.9): A charting library for React based on D3.js.
-   React-CSV (v2.0.3): A library for creating CSV downloads in React applications.

## Getting Started

To run this application locally, follow these steps:

1.  Clone this repository to your local machine.
2.  Navigate to the root directory of the project in your terminal.
3.  Install the project dependencies by running the command `npm install`.
4.  Start the application by running the command `npm start`.
5.  Open a web browser and navigate to `http://localhost:3000`

## Live Demo
https://meek-sable-0665c2.netlify.app/
