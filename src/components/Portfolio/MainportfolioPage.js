
import Header from '../Portfolio/PortfolioHeader';
import Navbars from '../Home/Navbar/Navbars';
import Team from './Portfolio';

import Footer from '../Home/Footer/Footer';
import './MainportfolioPage.css'

const MainteamPage = () => {
    return (
        <>
            <Navbars />
            <Header />
            <div className='teampageallcontent'>
            <Team />
            </div>
            
            <Footer />
        </>
    );
};

export default MainteamPage;