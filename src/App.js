import '../src/Styles/App.css';
import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import InfoCard from './Components/Card';
import url from './constants';

function App() {
  const [pageResults, setPageResults] = useState({ hits: [] });
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const buildUrl = (pageNumber) => {
    let requestUrl = url + `&page=${pageNumber}&query=${searchValue}&hitsPerPage=20`;

    if (!searchValue) {
      requestUrl = url + `&hitsPerPage=20&page=${pageNumber}`;
    }
    return requestUrl;
  };

  const fetchData = async (pageNumber) => {
    const url = buildUrl(pageNumber);
    const response = await fetch(url);
    const data = await response.json();
    setPageResults(data);
  };

  useEffect(() => {
    fetchData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <div className="App">
      <Header
        currentPage={currentPage}
        fetchData={fetchData}
        pageResults={pageResults}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        setCurrentPage={setCurrentPage}
      />
      <div className="grid">
        {_.map(pageResults.hits, (hits, i) => {
          return <InfoCard key={i++} info={hits} />;
        })}
      </div>
    </div>
  );
}

export default App;
