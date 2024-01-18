import React from 'react';
import './Header.css';

import { animated } from 'react-spring';

const Header = () => {
  

    return (
        <section className="home-wrapper round-inside">
         
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-0">
                        <div className="row">
                            <div className="col-md-9">
                                <animated.div className="home-inner"> {/* Added 'round-inside' class */}
                                    <h1>Unleashing The Potential Of Your Digital Journey.</h1>
                                    <p>Your partner in creating exceptional websites.
                                        We specialize in website development, web design,
                                        content writing, and copyright services.
                                        Let us take your online presence to the next
                                        level with our expertise and passion.
                                        Get in touch with us today and let's build something extraordinary together.
                                    </p>
                                    <button className="btn">Explore Our Work</button>
                                </animated.div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;

