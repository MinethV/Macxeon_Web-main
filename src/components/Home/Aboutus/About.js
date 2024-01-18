import React from 'react';
import './About.css'; // Import the CSS file for styling (create a new file: AboutUs.css)
import home from '../../../images/webdesign.gif';
import wavepattern from '../../../images/wave-haikei (1).png';
const AboutUs = () => {
  return (


    
    <div className='aboutushome'>
   
<img src={wavepattern} alt="wave" className='wavepattern'/>
    
    <div id="about-us" className="about-section-home">
        <div className="about-content-home">
            <div className="image-container-home">
            <img src={home} alt="Home" />
          </div>
          <div className="info-container-home">
            <h2>Take Your Business to New Heights with <span>Macxeon</span></h2>
            <p>
            Welcome to Macxeon, a leading digital marketing agency specializing in website design, development, and online marketing strategies. We are dedicated to helping businesses establish a powerful online presence and maximize their digital potential. </p>
<p>At Macxeon, we understand that in today's highly competitive digital landscape, a well-designed and user-friendly website is essential for success. Our team of talented designers and developers combines creativity with technical expertise to create stunning, responsive websites that captivate audiences and drive results.</p>

          
             
            
          </div>
        </div>
    
    </div>
    </div>
  );
};

export default AboutUs;
