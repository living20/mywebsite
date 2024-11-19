import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupingSelector from './GroupingSelector';
import TicketList from './TicketList';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        const { tickets } = response.data;
        if (Array.isArray(tickets)) {
          setTickets(tickets);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
  };

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
  };

  const groupedTickets = groupTickets(tickets, grouping);
  const sortedTickets = sortTickets(groupedTickets, sorting);

  return (
    <div className="container">
      <div className="kanban-header mb-3">
        <GroupingSelector 
          grouping={grouping}
          sorting={sorting}
          onGroupingChange={handleGroupingChange} 
          onSortingChange={handleSortingChange}
        />
      </div>
      <div className="row kanban-board">
        {Object.keys(sortedTickets).map(group => (
          <div className="col" key={group}>
            <TicketList title={group} tickets={sortedTickets[group]} />
          </div>
        ))}
      </div>
    </div>
  );
};

const groupTickets = (tickets, grouping) => {
  if (!Array.isArray(tickets)) {
    return {};
  }

  const grouped = tickets.reduce((acc, ticket) => {
    const key = ticket[grouping];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(ticket);
    return acc;
  }, {});

  if (grouping === 'status') {
    if (!grouped['Todo']) grouped['Todo'] = [];
    if (!grouped['In progress']) grouped['In progress'] = [];
    if (!grouped['Done']) grouped['Done'] = [];
    if (!grouped['Canceled']) grouped['Canceled'] = [];
  }

  return grouped;
};

const sortTickets = (groupedTickets, sorting) => {
    const sortedTickets = {};
    Object.keys(groupedTickets).forEach(group => {
      sortedTickets[group] = groupedTickets[group].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });
    return sortedTickets;
  };
  
  export default KanbanBoard;
  