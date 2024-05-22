import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ResponsiveAppBar from './Widgets/ResponsiveAppBar';
import Mainsentn from './Widgets/Mainsentn';
import Search from './Widgets/Search';
import SearchBar from './Widgets/SearchBar';
import { SearchResultsList } from './Widgets/SearchResultsList';


function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
     <ResponsiveAppBar/>
     <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
<Mainsentn/>

    </div>
  );
}

export default App;
