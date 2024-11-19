// src/components/TicketList.js

import React from 'react';
import TicketItem from './TicketItem';
import './TicketList.css';

const TicketList = ({ title, tickets }) => {
  return (
    console.log(tickets),
    <div className="ticket-list card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="ticket-count">{tickets.length} tickets</span>
      </div>
      <ul className="list-group list-group-flush">
        {tickets.map(ticket => (
          <li key={ticket.id} className="list-group-item">
            <TicketItem
              key={ticket.id}
              id={ticket.id}
              title={ticket.title}
              type={ticket.tag}
              profileImage={ticket.profileImage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
