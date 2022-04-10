import React from 'react';
import '../Styles/header.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Header = ({
  searchValue,
  setSearchValue,
  fetchData,
  currentPage,
  setCurrentPage,
  pageResults,
}) => {
  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      setSearchValue(event.target.value);
      event.target.value = '';
    }
  };

  console.log(pageResults);
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    fetchData(page);
  };

  console.log(currentPage);

  return (
    <div className="container">
      <div className="top-row">
        <input name="text" type="text" placeholder="Search" onKeyPress={handleKeyPress} />
        <Box sx={{ '& button': { m: 1 } }}>
          <div>
            <Button
              onClick={() => {
                setSearchValue('');
                fetchData(1);
                setCurrentPage(1);
              }}
              variant="outlined"
              size="medium"
            >
              Clear Search
            </Button>
          </div>
        </Box>
        {searchValue ? (
          <Stack direction="row" spacing={1}>
            <Chip label={searchValue} />
          </Stack>
        ) : (
          ''
        )}
      </div>
      <div className="bottom-row">
        <Stack spacing={4}>
          <Pagination
            siblingCount={3}
            boundaryCount={2}
            showFirstButton
            showLastButton
            count={pageResults.nbPages - 1}
            color="primary"
            onChange={handlePageChange}
            page={currentPage}
            variant="outlined"
          />
        </Stack>
      </div>
    </div>
  );
};

export default Header;
