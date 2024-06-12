import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    <div className="search-result">
    <div className="result-text">{result}</div>
  </div>
  );
};
