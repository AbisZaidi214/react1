import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter">
      <button onClick={() => setFilter('All')}>All</button>
      <button onClick={() => setFilter('Completed')}>Completed</button>
      <button onClick={() => setFilter('Incomplete')}>Incomplete</button>
    </div>
  );
};

export default Filter;
