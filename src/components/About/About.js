import React, { useState, useEffect } from 'react';
import './About.css';
import AboutUsImg from '../../images/webdeveloping2.png'
import wavepattern from '../../images/wave-haikei (1).png';


const TeamPage = () => {
  const [showAboutBox, setShowAboutBox] = useState(false);

  useEffect(() => {
    setShowAboutBox(true);
  }, []);

  return (

    <>
    <img src={wavepattern} alt="wave" className='wavepattern'/>

    <div className={`about-page ${showAboutBox ? 'show' : ''}`}>
       
        <div className="about-content">
          <div className="about-description">
                     <p>At Macxeon, we are a leading digital marketing agency specializing in website design, development, and online marketing strategies. With a deep understanding of the competitive digital landscape, we create visually stunning and user-friendly websites that captivate audiences and drive results. Our talented team combines creativity with technical expertise to deliver exceptional online experiences that help businesses establish a powerful online presence. From innovative design techniques to comprehensive marketing strategies, we are dedicated to maximizing your digital potential and helping you thrive in the digital realm. Partner with Macxeon and unlock the limitless possibilities of the digital world.</p>
          </div>
          <div className="about-image-container">
            <img src={AboutUsImg} alt="" className="img-fluid about-image" />
          </div>
        </div>
  <hr className='linebreaker' />
        <div className='VissionMission'>
        <ul className="VissionMission-list">
                <li className="VissionMission-item">
                    <div className="VissionMission-content-box">
                        <h4 className="h4 VissionMission-item-title">Our Vision</h4>
                        <p className="VissionMission-item-text">
                        At Macxeon, our vision is to be the go-to provider of cutting-edge digital solutions, specializing in website development, captivating design, compelling content, and persuasive copywriting. We strive to empower businesses to thrive in the digital age by revolutionizing their online presence.
                        </p>
                    </div>
                </li>
                <li className="VissionMission-item">
                   
                    <div className="VissionMission-content-box">
                        <h4 className="h4 VissionMission-item-title">Our Mission</h4>
                        <p className="VissionMission-item-text">
                        Deliver exceptional digital solutions that drive tangible results. We offer top-notch website development, innovative design, impactful content creation, and persuasive copywriting services. Our goal is to enhance online visibility, engage target audiences, and achieve strategic objectives. We are your trusted partner for digital success.
                        </p>
                    </div>
                </li>
                <li className="VissionMission-item">
                  
                    <div className="VissionMission-content-box">
                        <h4 className="h4 VissionMission-item-title">Our Objectives</h4>
                        <p className="VissionMission-item-text">
                            
Elevating businesses to new heights by driving digital success through innovation, fostering long-term partnerships, delivering exceptional quality, and consistently exceeding expectations.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <hr className='linebreaker' />
     
    </div>
    </>
  );
};

export default TeamPage;
