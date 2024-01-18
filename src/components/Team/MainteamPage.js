
import Header from '../Team/TeamHeader';
import Navbars from '../Home/Navbar/Navbars';
import Team from './Team';
import Footer from '../Home/Footer/Footer';
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