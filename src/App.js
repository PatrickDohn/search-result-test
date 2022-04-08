import './App.css';
import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Card from './Components/Card';
import Pagination from 'react-js-pagination';

function App() {
  const [pageResults, setPageResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const buildUrl = (pageNumber) => {
    let url = `https://i1cqoys68c-dsn.algolia.net/1/indexes/stg_choicemarket_products?x-algolia-application-id=I1CQOYS68C&x-algolia-api-key=eac7b807c0109771a245855c7501fca3&page=${pageNumber}&query=${searchValue}&hitsPerPage=20`;

    if (!searchValue) {
      url = `https://i1cqoys68c-dsn.algolia.net/1/indexes/stg_choicemarket_products?x-algolia-application-id=I1CQOYS68C&x-algolia-api-key=eac7b807c0109771a245855c7501fca3&hitsPerPage=20&page=${pageNumber}`;
    }
    return url;
  };

  const fetchData = async (pageNumber) => {
    const url = buildUrl(pageNumber);
    const response = await fetch(url);
    const data = await response.json();
    setPageResults(data);
  };

  const handlePageChange = (pageNumber) => {
    fetchData(pageNumber);
    setCurrentPage({ activePage: pageNumber });
  };

  useEffect(() => {
    fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const pageHits = pageResults.hits;

  return (
    <div className="App">
      <Header setSearchValue={setSearchValue} searchValue={searchValue} />

      <div className="grid">
        {_.map(pageHits, (hits, i) => {
          return <Card key={i++} info={hits} />;
        })}
      </div>

      <Pagination
        activePage={pageResults.page}
        itemsCountPerPage={20}
        totalItemsCount={500}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </div>
  );
}

export default App;
