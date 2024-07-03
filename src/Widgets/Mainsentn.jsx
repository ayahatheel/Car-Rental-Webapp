import React, { useState, useEffect } from 'react';
import './mainsentn.css'; 
import SearchBar from './SearchBar'; 
import SearchResultsList from './SearchResultsList'; 

function Mainsentn() {
    const [results, setResults] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
    const [isTablet, setIsTablet] = useState(window.innerWidth > 480 && window.innerWidth <= 768);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 480);
            setIsTablet(window.innerWidth > 480 && window.innerWidth <= 768);
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
                    {isMobile ? ' سيارتك المفضلة وانطلق' : isTablet ? 'سيارتك المفضلة وانطلق' : 'سيارتك المفضلة وانطلق في '}
                    {!isMobile && !isTablet && <strong style={{ fontWeight: 'bold', color: 'red' }}> الطريق </strong>}
                    {!isMobile && !isTablet && 'بخطوات '}
                    {!isMobile && !isTablet && <strong style={{ fontWeight: 'bold', color: 'red' }}>سهلة</strong>}
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
