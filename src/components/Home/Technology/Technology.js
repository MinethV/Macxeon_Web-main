import React from 'react';
import './Technology.css';
import REACT from '../../../images/React_logo.png';
import HTML from '../../../images/html_logo.png';
import CSS from '../../../images/css_logo.png';
import JS from '../../../images/js_logo.png';
import VCC from '../../../images/vs_logo.png';
import NODEJS from '../../../images/nodejs_logo.png';
import GITHUB from '../../../images/github-01.png'
import CODESANDBOX from '../../../images/codesandbox-01.png'
import WP from '../../../images/wordpress_logo1.png';

const Technology = () => {
  return (
    <section className="technology">
      <h1 className="tech-title">With Modern <span>Technology</span></h1>
      <div className='technology-box'> 
      <div className="technology-item-box">
        <ul className="technology-list has-scrollbar">
          <li className="technology-item">
            <a href="#">
             <img src={REACT} alt="React" />
            </a>
          </li>
          <li className="technology-item">
            <a href="#">
            <img src={HTML} alt="HTML" />
            </a>
          </li>
          <li className="technology-item">
            <a href="#">
            <img src={CSS} alt="CSS" />
            </a>
          </li>
          <li className="technology-item">
            <a href="#">
            <img src={JS} alt="JS" />
            </a>
          </li>
          <li className="technology-item">
            <a href="#">
            <img src={VCC} alt="VsCode" />
            </a>
          </li>
          <li className="technology-item">
            <a href="#">
            <img src={NODEJS} alt="NodeJS" />
            </a>
          </li>
          <li className="technology-item">
            <a href="#">
              <img src={GITHUB} alt="GitHub" />
            </a>
          </li>
          <li className="technology-item">
            <a href="#">
              <img src={CODESANDBOX} alt="client logo" />
            </a>
          </li>
          <li className="technology-item">
            <a href="#">
            <img src={WP} alt="WordPress" />
            </a>
          </li>
        </ul>
      </div>
      </div>
      
    </section>
  );
}

export default Technology;
