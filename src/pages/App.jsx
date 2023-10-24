import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import SearchBar from '../components/SearchBar';
import './App.css';

function App() {
  // Estado para armazenar todas as tarefas
  const [tasks, setTasks] = useState([]);
  // Estado para rastrear o próximo ID da tarefa
  const [nextTaskId, setNextTaskId] = useState(1);
  // Estado para armazenar tarefas filtradas
  const [filteredTasks, setFilteredTasks] = useState([]);
  // Estado para exibir mensagem de tarefa concluída
  const [completedTaskMessage, setCompletedTaskMessage] = useState('');
  // Estado para exibir mensagem de nenhuma tarefa encontrada
  const [noTasksFoundMessage, setNoTasksFoundMessage] = useState('');
  // Estado para rastrear o texto de pesquisa
  const [searchText, setSearchText] = useState('');
  // Estado para rastrear se a pesquisa está ativa
  const [isSearching, setIsSearching] = useState(false);

  // Função para adicionar uma nova tarefa
  const addTask = (title) => {
    const newTask = { id: nextTaskId, title, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNextTaskId(nextTaskId + 1);
  };

  // Função para editar uma tarefa
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

  // Função para deletar uma tarefa
  const deleteTask = (taskId) => {
    // Remove a tarefa da lista de tarefas
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    // Remove a tarefa da lista de tarefas filtradas
    setFilteredTasks((prevFilteredTasks) => prevFilteredTasks.filter((task) => task.id !== taskId));
  };

  // Função para lidar com a pesquisa de tarefas
  const handleSearch = (searchText) => {
    setSearchText(searchText);

    if (searchText.trim() === '') {
      // Se o campo de pesquisa estiver vazio, não estamos mais pesquisando
      setIsSearching(false);
      setFilteredTasks([]);
      setNoTasksFoundMessage(''); // Limpa a mensagem de "Nenhuma tarefa encontrada"
    } else {
      // Se há texto de pesquisa, estamos pesquisando
      setIsSearching(true);

      const filtered = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchText.toLowerCase())
      );

      if (filtered.length === 0) {
        setNoTasksFoundMessage('Nenhuma tarefa encontrada.');
      }

      setFilteredTasks(filtered);
    }
  };

  // Função para limpar o filtro
  const clearFilter = () => {
    setSearchText('');
    setIsSearching(false);
    setFilteredTasks([]);
    setNoTasksFoundMessage(''); // Limpa a mensagem de "Nenhuma tarefa encontrada"
  };

  useEffect(() => {
    // Mostra a mensagem de tarefa concluída e a remove após 3 segundos
    if (completedTaskMessage) {
      const messageElement = document.createElement('div');
      messageElement.className = 'completed-task-message';
      messageElement.textContent = completedTaskMessage;
      document.body.appendChild(messageElement);
      setTimeout(() => {
        document.body.removeChild(messageElement);
      }, 3000);
    }
  }, [completedTaskMessage]);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      {/* Componente para adicionar tarefas */}
      <TaskForm onTaskAdd={addTask} />
      {/* Componente para pesquisar tarefas */}
      <SearchBar onSearch={handleSearch} />
      {/* Botão "Limpar pesquisa" */}
      {isSearching && (
        <button onClick={clearFilter}>Limpar Pesquisa</button>
      )}
      {/* Componente para listar tarefas */}
      <TaskList tasks={filteredTasks.length > 0 ? filteredTasks : tasks} onTaskEdit={editTask} onTaskDelete={deleteTask} />
      {noTasksFoundMessage && (
        <div className="no-tasks-message">{noTasksFoundMessage}</div>
      )}
    </div>
  );
}

export default App;
