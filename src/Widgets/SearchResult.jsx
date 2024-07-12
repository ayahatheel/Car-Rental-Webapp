import React from "react";
import "./SearchResultsList.css";

const SearchResult = ({ result }) => {
  return (
    <div className="search-result">
      <div className="result-text">{result}</div>
    </div>
  );
};

export default SearchResult;
