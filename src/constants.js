const APPLICATION_ID = process.env.REACT_APP_ALGOLIA_APPLICATION_ID;
const API_KEY = process.env.REACT_APP_ALGOLIA_API_KEY;

const url = [
  'https://i1cqoys68c-dsn.algolia.net/', // base url
  '1/indexes/stg_choicemarket_products', // endpoint
  `?x-algolia-application-id=${APPLICATION_ID}`, // application ID
  `&x-algolia-api-key=${API_KEY}`, // API KEY
].join('');

export default url;
