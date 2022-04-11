<div id="top"></div>

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Netlify Status](https://api.netlify.com/api/v1/badges/e3ed860f-cf16-4131-8ab6-dc57f60f64c8/deploy-status)](https://app.netlify.com/sites/phenomenal-cucurucho-493fb4/deploys)

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h1 align="center">Search Page</h1>

  <p align="center">
    Search Page Test
 
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
     <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A simple search result page for displaying and searching for product information.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React.js](https://reactjs.org/)
- [Algolia](https://www.algolia.com/doc/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key and Application ID at [Algolia](https://www.algolia.com/doc/)
2. Clone the repo
   ```sh
   git clone git@github.com:PatrickDohn/search-result-test.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Set up .ENV file. ENV should have the following format

   ```
   REACT_APP_YOUR_API_KEY=youapikey
   REACT_APP_YOUR_CLIENT_ID=yourclientid
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- DEPLOYMENT -->

## Deployment

This project is hosted on [Netlify](https://www.netlify.com/)

To set up your own project head to Netlify and sign up for free.

Follow there deployment docs and make sure and ENV variable you have you add to your netlify project.

In Netlify do the following.

1. Go to your site
2. In the the side bar click `Build & Deploy`
3. click `Enviroment`
4. Go to `Enviroment Variables` and add your variables as they appear in your ENV.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Set up API request
- [x] Build out Card components to display data
- [x] Build out search component to to filter results based on search param
- [x] Add styling
- [ ] Add scoring system for more accurate search
- [ ] Add tags of differnt categories for simple filtering

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Patrick Dohn - [LinkedIn](https://www.linkedin.com/in/patrick-dohn/) - dohnpatrick1993@gmail.com

Project Link: [Search Page](https://phenomenal-cucurucho-493fb4.netlify.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/patrick-dohn/
