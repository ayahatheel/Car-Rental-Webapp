import React, { useState, useEffect } from 'react';
import './mainsentn.css'; 
import SearchBar from './SearchBar'; 
import SearchResultsList from './SearchResultsList'; 

function Mainsentn() {
    const [results, setResults] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 480);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div className='sentnce'>
            <div className='first-div' style={{ fontWeight: 'bold', color: 'red' }}>استأجر</div>
            <div className='second-div'>
                <span>
                    {isMobile ? ' سيارتك المفضلة وانطلق' : 'سيارتك المفضلة وانطلق في '}
                    {!isMobile && <strong style={{ fontWeight: 'bold', color: 'red' }}> الطريق </strong>}
                    {!isMobile && 'بخطوات '}
                    {!isMobile && <strong style={{ fontWeight: 'bold', color: 'red' }}>سهلة</strong>}
                </span>
            </div>
            
            <div className="search-bar-container">
                <SearchBar setResults={setResults} />
                {results && results.length > 0 && <SearchResultsList results={results} />}
            </div>
        </div>
    )
}

export default Mainsentn;
