import React from 'react';
import './Footer.css';
import wavepattern from '../../../images/layered-waves-haikei (2).png';
import logo from '../../../images/Asset 1.png';
import instagram from '../../../images/instagram.png';
import facebook from '../../../images/facebook.png';
import twitter from '../../../images/twitter.png';
import linkedin from '../../../images/linkedin.png';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <>
        <img src={wavepattern} alt="wave" className='wavepattern-footer'/>
        <footer className="footer-wrapper" id="contact">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                        <div className="f-detail">
                           <ul >
                            <li className='logofooter'>
                            <Link to="/" className="footer-brand">
                            <img src={logo} alt="" className="img-fluid" />
                        </Link>
                            </li>
                            <li className='footerabout'>Unleash your online potential with Macxeon. Design, develop, create, captivate.</li>
                           <li className='contactitems'><p>Mobile :-</p><a href="tel:+12133522795" class="contact-link"> +94 77 681 7474</a></li>
                           <li className='contactitems'><p>E-Mail :-</p> <a href="mailto:macxeontech@gmail.com" class="contact-link"> macxeontech@gmail.com</a></li>
                           <li>
                                <div className='social-media-list'>
                                        <Link to="/" >
                                            <img src={instagram} alt=""  />
                                        </Link>
                              
                                
                                        <Link to="/" >
                                            <img src={facebook} alt=""  />
                                        </Link>
                              
                                    
                                        <Link to="/" >
                                            <img src={linkedin} alt=""  />
                                        </Link>
                                  
                                    
                                        <Link to="/" >
                                            <img src={twitter} alt=""  />
                                        </Link>
                                    
                                </div>
                            </li>
                           </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="f-detail">
                           <ul>
                            <li className='titlehead'>About</li>
                            <li className='otherpoints'>About Us</li>
                            <li className='otherpoints'>Portfolio</li>
                            <li className='otherpoints'>Contact Us</li>
                           </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="f-detail">
                           <ul>
                            <li className='titlehead'>Services</li>
                            <li className='otherpoints'>Web Designing</li>
                            <li className='otherpoints'>Web Developing</li>
                            <li className='otherpoints'>Content Creation</li>
                            <li className='otherpoints'>Copywriting</li>
                           </ul>
                        </div>
                    </div>
                <hr  className='dividerfooter'/>
                    <div className="col-md-12 text-center mt-4 pb-2">
                        <p>© 2023 Macxeon. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;