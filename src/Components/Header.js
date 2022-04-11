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
  const paginationLength = pageResults.nbPages - 1;

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      setSearchValue(event.target.value);
      event.target.value = '';
    }
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    fetchData(page);
  };

  return (
    <div className="container">
      <div className="top-row">
        <input name="text" type="text" placeholder="Search" onKeyPress={handleKeyPress} />
        <Box sx={{ '& button': { m: 1 } }}>
          <div>
            {searchValue ? (
              <Button
                onClick={() => {
                  setSearchValue('');
                  fetchData(1);
                  setCurrentPage(1);
                }}
                variant="contained"
                size="medium"
                color="error"
              >
                {searchValue}
              </Button>
            ) : (
              ''
            )}
          </div>
        </Box>
      </div>
      <div className="bottom-row">
        <Stack spacing={2}>
          <Pagination
            siblingCount={3}
            boundaryCount={2}
            showFirstButton
            showLastButton
            count={paginationLength}
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
