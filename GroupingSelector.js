import React from 'react';
import './GroupingSelector.css';

const GroupingSelector = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  return (
    <div className="dropdown mb-3">
      <button 
        className="btn btn-secondary dropdown-toggle" 
        type="button" 
        id="dropdownMenuButton" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
      >
        Display
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li className="px-3 py-2">
          <div className="form-group">
            <label htmlFor="grouping">Grouping:</label>
            <select id="grouping" className="form-select" value={grouping} onChange={(e) => onGroupingChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sorting">Ordering:</label>
            <select id="sorting" className="form-select" value={sorting} onChange={(e) => onSortingChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GroupingSelector;
