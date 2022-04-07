import React from "react";
import "../Styles/header.css";

const Header = ({ searchValue, setSearchValue, performSearch }) => {
  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
        setSearchValue(event.target.value);
      event.target.value = "";

    }
  };

  return (
    <div className="container">
      <input
        name="text"
        type="text"
        placeholder="Search"
        // onChange={(event) => handleOnChange(event)}
        onKeyPress={handleKeyPress}
      />
      <div className="tags">{searchValue}</div>
    </div>
  );
};

export default Header;
