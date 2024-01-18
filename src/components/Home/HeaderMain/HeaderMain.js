import React from 'react';
import Client from '../Client/Client';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import About from '../Aboutus/About';
import Navbars from '../Navbar/Navbars';
import OurWorks from '../OurWorks/OurWorks';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Technology from '../Technology/Technology';
import './HeaderMain.css';


const HeaderMain = () => {
    return (
        <>
            <Navbars />
            <Header />
        <div className='homepageall'>
     
            <About />
            <Services />
            <Technology />
            <OurWorks />
            <Client />
          
            <Footer />
        </div>
        </>
    );
};

export default HeaderMain;
