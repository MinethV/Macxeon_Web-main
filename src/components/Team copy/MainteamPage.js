
import Header from '../Team/TeamHeader';
import Navbars from '../Aboutus/Navbar/Navbars';
import Team from './Team';
import Footer from '../Aboutus/Footer/Footer';
import './MainTeamPage.css'

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