import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Task({ task, onTaskEdit, onTaskDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onTaskEdit(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button onClick={handleSave}>Salvar</button>
        </>
      ) : (
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

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired, // Adicione a propriedade 'completed' como um booleano
  }),
  onTaskEdit: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export default Task;
