import React from 'react';
import './TeamHeader.css';

import { useSpring, animated } from 'react-spring';

const Header = () => {
    const props = useSpring({
        transform: 'translateY(0px)',
        opacity: 1,
        from: { transform: 'translateY(60px)', opacity: 0 },
        config: { duration: 800 },
    });

    return (
        <section className="team-wrapper">
         <h1 className="Team-title">Our <span>Team</span></h1>
       
        </section>
    );
};

export default Header;