import React, { useState } from 'react';
import './mainsentn.css'; 
import  SearchBar  from './SearchBar'; 
import  SearchResultsList from './SearchResultsList'; 


function Mainsentn() {
    const [results, setResults] = useState([]);

    return (
        <div className='sentnce'>
            <div className='first-div' style={{ fontWeight: 'bold', color: 'red' }}>استأجر</div>
            <div className='second-div'>
                <span>
                    سيارتك المفضلة وانطلق في <mark style={{ fontWeight: 'bold', color: 'red' }}>الطريق</mark>
                    بخطوات <mark style={{ fontWeight: 'bold', color: 'red' }}>سهلة</mark>
                </span>
            </div>
            
            {/* <Search/> */}

            <div className="search-bar-container">
                <SearchBar setResults={setResults} />
                {results && results.length > 0 && <SearchResultsList results={results} />}
            </div>
        </div>
    )
}

export default Mainsentn;
