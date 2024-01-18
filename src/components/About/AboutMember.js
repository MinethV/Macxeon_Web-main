import React from 'react';
import PropTypes from 'prop-types';
import './Team.css'; // Create a CSS file for styling

const TeamMember = ({ name, info, photo }) => {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={photo} alt={name} />
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        
        <p>{info}</p>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
 
  info: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default TeamMember;
