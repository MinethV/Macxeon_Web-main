import React, { useState, useEffect } from 'react';
import TeamMember from './TeamMember';
import Krishan from '../Team/krishan.jpg';
import Lakvindu from '../Team/lakvindu.jpg';
import Lassen from '../Team/lassen.jpg';
import Mineth from '../Team/mineth.jpg';
import wavepattern from '../../images/wave-haikei (1).png';



const TeamPage = () => {
  const [showTeamMembers, setShowTeamMembers] = useState(false);

  useEffect(() => {
    setShowTeamMembers(true);
  }, []);

  const teamMembers = [
    {
      name: 'Mineth Vismitha',
      info: 'Innovative Frontend Developer and UI/UX Designer',
      photo: Mineth,
      description : 'Mineth Vismitha, a talented member of our team, is pursuing a Computer Science degree at the Information Institute of Technology. With a passion for frontend development and UI/UX design, Mineth brings fresh perspectives and innovative ideas. Despite being early in his educational journey, Mineth excels in creating intuitive and visually appealing user interfaces using ReactJS, HTML, CSS, and JavaScript. His designs captivate and delight users with attention to detail and an understanding of user behavior. Mineths collaborative approach and dedication to learning contribute to our teams success. With skills, enthusiasm, and a commitment to excellence, Mineth delivers outstanding frontend and UI/UX solutions that enhance digital presence and user experiences at Macxeon.'
    },
    {
      name: 'Vidu Liyanage',
      info: 'Creative UI/UX and Graphic Designer!',
      photo: 'john-doe.jpg',
      description : 'Mineth Vismitha, a talented member of our team, is pursuing a Computer Science degree at the Information Institute of Technology. With a passion for frontend development and UI/UX design, Mineth brings fresh perspectives and innovative ideas. Despite being early in his educational journey, Mineth excels in creating intuitive and visually appealing user interfaces using ReactJS, HTML, CSS, and JavaScript. His designs captivate and delight users with attention to detail and an understanding of user behavior. Mineths collaborative approach and dedication to learning contribute to our teams success. With skills, enthusiasm, and a commitment to excellence, Mineth delivers outstanding frontend and UI/UX solutions that enhance digital presence and user experiences at Macxeon.'

    },
    {
      name: 'Krishan Shalitha',
      info: 'Creative UI/UX and Graphic Designer!',
      photo: Krishan,
      description : 'Mineth Vismitha, a talented member of our team, is pursuing a Computer Science degree at the Information Institute of Technology. With a passion for frontend development and UI/UX design, Mineth brings fresh perspectives and innovative ideas. Despite being early in his educational journey, Mineth excels in creating intuitive and visually appealing user interfaces using ReactJS, HTML, CSS, and JavaScript. His designs captivate and delight users with attention to detail and an understanding of user behavior. Mineths collaborative approach and dedication to learning contribute to our teams success. With skills, enthusiasm, and a commitment to excellence, Mineth delivers outstanding frontend and UI/UX solutions that enhance digital presence and user experiences at Macxeon.'
    },
    {
      name: 'Chamara Rajapakshe',
      info: 'John is an experienced leader with a passion for...',
      photo: 'john-doe.jpg',
      description : 'Mineth Vismitha, a talented member of our team, is pursuing a Computer Science degree at the Information Institute of Technology. With a passion for frontend development and UI/UX design, Mineth brings fresh perspectives and innovative ideas. Despite being early in his educational journey, Mineth excels in creating intuitive and visually appealing user interfaces using ReactJS, HTML, CSS, and JavaScript. His designs captivate and delight users with attention to detail and an understanding of user behavior. Mineths collaborative approach and dedication to learning contribute to our teams success. With skills, enthusiasm, and a commitment to excellence, Mineth delivers outstanding frontend and UI/UX solutions that enhance digital presence and user experiences at Macxeon.'
    },
    {
      name: 'Lakvindu Siriwardena',
      info: 'John is an experienced leader with a passion for...',
      photo: Lakvindu,
      description : 'Mineth Vismitha, a talented member of our team, is pursuing a Computer Science degree at the Information Institute of Technology. With a passion for frontend development and UI/UX design, Mineth brings fresh perspectives and innovative ideas. Despite being early in his educational journey, Mineth excels in creating intuitive and visually appealing user interfaces using ReactJS, HTML, CSS, and JavaScript. His designs captivate and delight users with attention to detail and an understanding of user behavior. Mineths collaborative approach and dedication to learning contribute to our teams success. With skills, enthusiasm, and a commitment to excellence, Mineth delivers outstanding frontend and UI/UX solutions that enhance digital presence and user experiences at Macxeon.'
    },
    {
      name: 'Lassen Wijekoon',
      info: 'John is an experienced leader with a passion for...',
      photo: Lassen,
      description : 'Mineth Vismitha, a talented member of our team, is pursuing a Computer Science degree at the Information Institute of Technology. With a passion for frontend development and UI/UX design, Mineth brings fresh perspectives and innovative ideas. Despite being early in his educational journey, Mineth excels in creating intuitive and visually appealing user interfaces using ReactJS, HTML, CSS, and JavaScript. His designs captivate and delight users with attention to detail and an understanding of user behavior. Mineths collaborative approach and dedication to learning contribute to our teams success. With skills, enthusiasm, and a commitment to excellence, Mineth delivers outstanding frontend and UI/UX solutions that enhance digital presence and user experiences at Macxeon.'
    },
    // Add more team members here
  ];

  return (


    <>
    <img src={wavepattern} alt="wave" className='wavepattern'/>
    <div className="team-page">
        <div className="team-members">
          
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
    
    </div>
    </>
  );
};

export default TeamPage;
