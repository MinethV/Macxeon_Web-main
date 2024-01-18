import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Team.css';

const TeamMember = ({ name, info, photo, description }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleMemberClick = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="team-member" onClick={handleMemberClick}>
      <div className="member-image">
        <img src={photo} alt={name} />
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        <p>{info}</p>
      </div>
      {isOverlayOpen && (
        <div className="team-overlay" onClick={closeOverlay}>
          <div className="team-overlay-content" onClick={stopPropagation}>
            <div className="team-overlay-box">
              <h3>{name}</h3>
              <p>{info}</p>
              <img src={photo} alt={name} />
         <p>{description}</p>

              <button className="close-button" onClick={closeOverlay}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};

export default TeamMember;
