import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'; // Import the CSS file
import ZentroMedia from '../../images/zentromedia.png';
import ZentroMediapopupone from '../../images/zentroM.png';
import Thundermac from '../../images/thundermac web.png';
import LiyontaTea from '../../images/liyonta tea.png';
import LEOClubUI from '../../images/leoclubiit.png';
import wavepattern from '../../images/wave-haikei (1).png';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Zentro Media',
      description: 'Web Design & Development',
      infoone :  'Zentro Media is a social media marketing agency (SMMA) that specializes in paid advertising services. They help their clients reach their target audience through various social media platforms such as Facebook, Instagram, Twitter, and LinkedIn. Their team of experienced professionals works closely with clients to develop customized advertising campaigns tailored to their specific needs and budget.',
      titletwo : 'Challenges & Solutions',
      infotwo : 'At Macxeon, we were excited to take on the challenge of creating a website for Zentro Media, a social media marketing agency specializing in paid advertising services. However, we quickly realized that designing a website for a company that only offers paid advertising presented unique challenges.',
      infothree : 'One of the main challenges we faced was effectively showcasing Zentro Medias expertise in paid advertising on their website. We wanted to create a design that highlighted their services and showcased their results without overwhelming the user with too much information. To solve this challenge, we worked closely with Zentro Media to understand their target audience and developed a user-friendly website design that effectively communicated their core message.',
      infofour : 'Another challenge we encountered was optimizing the website for lead generation. As a company that relies heavily on generating leads through their website, Zentro Media needed a solution that would encourage users to contact them for more information. To address this challenge, we implemented various lead generation forms and calls-to-action throughout the website.',
      infofive : 'Overall, we are proud of the website we created for Zentro Media and believe that it effectively communicates their unique selling proposition while also providing an engaging user experience. Our team worked closely with Zentro Media to understand their needs and develop a customized solution that met their objectives. We look forward to continuing our partnership with Zentro Media and helping them achieve their business goals through innovative digital marketing strategies.',
      image: ZentroMedia,
      imagepopupone: ZentroMediapopupone,
      link: 'https://example.com/project1',
    },
    {
      title: 'ThunderMac',
      description: 'Web Development',
      image: Thundermac,
      link: 'https://example.com/project2',
    },
    {
      title: 'Liyonta Tea',
      description: 'Web Design & Development',
      image: LiyontaTea,
      link: 'https://example.com/project2',
    },
    {
      title: 'LEO Club of IIT',
      description: 'Web Design ',
      image: LEOClubUI,
      link: 'https://example.com/project2',
    },
    // Add more projects as needed
  ];

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <img src={wavepattern} alt="wave" className="wavepattern" />

      <div className="portfolio-page">
        <div className="portfolio-container">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                onClick={(e) => {
                  e.preventDefault();
                  openProject(project);
                }}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="overlay">
          <div className="overlay-content">

            <div className='overlay-content-heading'>
            <span className="close" onClick={closeProject}>
              &times;
            </span>
            <h1>{selectedProject.title}</h1>
            <p>{selectedProject.description}</p>
            </div>

            <img src={selectedProject.imagepopupone} alt={selectedProject.title} />
            
            <p className='info-one'>{selectedProject.infoone}</p>
            <h2 className='title-two'>{selectedProject.titletwo}</h2>
            <p className='info-two'>{selectedProject.infotwo}</p>
            <p className='info-two'>{selectedProject.infothree}</p>
            <p className='info-two'>{selectedProject.infofour}</p>
            <p className='info-two'>{selectedProject.infofive}</p>
            <a href={selectedProject.link}>View Project</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
