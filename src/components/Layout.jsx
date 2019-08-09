import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './../pages/Home';


const Layout = (props) => (
    <div className="Layout">
        <div className="Header-container">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    </div>
)

export default Layout;