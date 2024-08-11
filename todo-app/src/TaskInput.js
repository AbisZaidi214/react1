import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleAdd = () => {
    if (taskName.trim() !== '') {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TaskInput;
