import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');

  const handleAdd = () => {
    if (taskName.trim()) {
      onAdd(taskName, dueDate, priority);
      setTaskName('');
      setDueDate('');
      setPriority('low');
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task name"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
