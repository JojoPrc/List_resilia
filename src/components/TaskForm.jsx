import React, { useState } from 'react';

function TaskForm({ onTaskAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se o campo de tarefa não está vazio
    if (task.trim() === '') {
      return; // Sai da função se estiver vazio
    }

    onTaskAdd(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicionar uma nova tarefa"
      />
      <button type="submit" disabled={!task.trim()}>Adicionar</button>
    </form>
  );
}

export default TaskForm;
