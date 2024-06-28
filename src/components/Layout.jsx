import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Routers from '../routers/Routers';

function Layout() {
    return (
        <>
            <Header />
            <div>
                <Routers />
            </div>
            <div style={{ marginTop: '50px' }}> 
                <Footer />
            </div>
        </>
    );
}

export default Layout;
