import React from 'react';
import Task from './Task';

function TaskList({ tasks, onTaskEdit, onTaskDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onTaskEdit={onTaskEdit}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
