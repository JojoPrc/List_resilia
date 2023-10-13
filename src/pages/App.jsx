import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import SearchBar from '../components/SearchBar';
import './App.css'; // Importe o arquivo de estilos

function App() {
  const [tasks, setTasks] = useState([]);
  const [nextTaskId, setNextTaskId] = useState(1);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [completedTaskMessage, setCompletedTaskMessage] = useState('');
  const [noTasksFoundMessage, setNoTasksFoundMessage] = useState('');

  const addTask = (title) => {
    const newTask = { id: nextTaskId, title, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNextTaskId(nextTaskId + 1);
  };

  const editTask = (taskId, editedTitle, completed) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: editedTitle, completed } : task
      )
    );
    if (completed) {
      setCompletedTaskMessage('Tarefa concluída');
      setTimeout(() => {
        setCompletedTaskMessage('');
      }, 3000);
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleSearch = (searchText) => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filtered.length === 0) {
      setNoTasksFoundMessage('Nenhuma tarefa encontrada.');
      setTimeout(() => {
        setNoTasksFoundMessage('');
      }, 3000);
    }

    setFilteredTasks(filtered);
  };
  
  useEffect(() => {
    
    if (completedTaskMessage) {
  
      const messageElement = document.createElement('div');
      messageElement.className = 'completed-task-message';
      messageElement.textContent = completedTaskMessage;
      document.body.appendChild(messageElement);

      // Remova a mensagem após 3 segundos
      setTimeout(() => {
        document.body.removeChild(messageElement);
      }, 3000);
    }
  }, [completedTaskMessage]);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskForm onTaskAdd={addTask}/>
      <SearchBar onSearch={handleSearch}/>
      <TaskList
        tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
        onTaskEdit={editTask}
        onTaskDelete={deleteTask}
      />
      {noTasksFoundMessage && (
        <div className="no-tasks-message">{noTasksFoundMessage}</div>
      )}
    </div>
  );
}

export default App;
