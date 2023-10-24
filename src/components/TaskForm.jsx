import React, { useState } from 'react';

function TaskForm({ onTaskAdd }) {
  // Criando um estado para a tarefa a ser adicionada
  const [task, setTask] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que a página seja recarregada ao enviar o formulário

    // Verifica se o campo de tarefa não está vazio ou contém apenas espaços em branco
    if (task.trim() === '') {
      return; // Sai da função se estiver vazio
    }

    // Chama a função de adicionar tarefa passando o título da tarefa
    onTaskAdd(task);

    // Limpa o campo de tarefa após a adição
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campo de entrada para adicionar uma nova tarefa */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicionar uma nova tarefa"
      />
      {/* Botão para adicionar a tarefa, desabilitado se o campo estiver vazio ou contendo apenas espaços em branco */}
      <button type="submit" disabled={!task.trim()}>Adicionar</button>
    </form>
  );
}

export default TaskForm;
