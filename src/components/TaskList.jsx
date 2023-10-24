import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

function TaskList({ tasks, onTaskEdit, onTaskDelete }) {
  return (
    <div>
      {/* Mapeie a matriz de tarefas para criar componentes Task para cada tarefa */}
      {tasks.map((task) => (
        <Task
          key={task.id} // Atribui uma chave única para cada componente Task
          task={task} // Passa os dados da tarefa como uma prop para o componente Task
          onTaskEdit={onTaskEdit} // Fornece a função de edição de tarefa
          onTaskDelete={onTaskDelete} // Fornece a função de exclusão de tarefa
        />
      ))}
    </div>
  );
}

// Declaração de tipos para as props do componente TaskList
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    // Adicione outras propriedades da tarefa aqui, se necessário
  })).isRequired, // A propriedade 'tasks' é obrigatória e deve ser uma matriz de objetos com determinada estrutura
  onTaskEdit: PropTypes.func.isRequired, // A propriedade 'onTaskEdit' é uma função obrigatória
  onTaskDelete: PropTypes.func.isRequired, // A propriedade 'onTaskDelete' é uma função obrigatória
};

export default TaskList;
