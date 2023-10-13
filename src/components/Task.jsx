import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      <span>{task.title}</span>
      <button>Concluir</button>
    </div>
  );
};

export default Task;
