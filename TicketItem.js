// src/components/TicketItem.js

import React from 'react';
import './TicketItem.css';

const TicketItem = ({ id, title, type, profileImage }) => (
  <div className="ticket-item">
    <div className="ticket-header">
      <span className="ticket-id">{id}</span>
      <img src={profileImage} alt="Profile" className="profile-image" />
    </div>
    <div className="ticket-title">{title}</div>
    <div className="ticket-meta">
      <span className="ticket-icon">!</span>
      <span className="ticket-type">{type}</span>
    </div>
  </div>
);

export default TicketItem;
