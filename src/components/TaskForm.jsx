import React, { useState } from 'react';

const TaskForm = ({ onTaskAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Valide os dados se necessário
    onTaskAdd({ title: task });
    setTask(''); // Limpe o campo após adicionar a tarefa
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Adicionar uma nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default TaskForm;
