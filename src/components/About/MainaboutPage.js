
import Header from '../About/AboutHeader';
import Navbars from '../Home/Navbar/Navbars';
import Team from './About';
import Footer from '../Home/Footer/Footer';
import './MainaboutPage.css';

const MainteamPage = () => {
    return (
        <>
            <Navbars />
            <Header />
            <div className='aboutpagecontent'>
            <Team />
            <Footer />
            </div>
        </>
    );
};

export default MainteamPage;