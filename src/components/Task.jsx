import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Task({ task, onTaskEdit, onTaskDelete }) {
  // Estado para controlar se a tarefa está em modo de edição
  const [isEditing, setIsEditing] = useState(false);

  // Estado para rastrear o título da tarefa editada
  const [editedTask, setEditedTask] = useState(task.title);

  // Função para ativar o modo de edição
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Função para salvar as alterações na tarefa
  const handleSave = () => {
    onTaskEdit(task.id, editedTask);
    setIsEditing(false); // Desativar o modo de edição
  };

  return (
    <div>
      {isEditing ? (
        // Modo de edição: mostra um campo de edição e um botão "Salvar"
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleSave}>Salvar</button>
        </>
      ) : (
        // Modo de visualização: mostra o título, checkbox para conclusão, botões de edição e exclusão
        <>
          <span>{task.title}</span>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => {
              onTaskEdit(task.id, task.title, e.target.checked);
            }}
          />
          <button onClick={handleEdit}>Editar</button>
          <button onClick={() => onTaskDelete(task.id)}>Deletar</button>
        </>
      )}
    </div>
  );
}

// Defina os tipos das propriedades para verificação de tipo
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
  onTaskEdit: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export default Task;
