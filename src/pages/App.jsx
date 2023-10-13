import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [nextTaskId, setNextTaskId] = useState(1);

  const addTask = (title) => {
    const newTask = { id: nextTaskId, title };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNextTaskId(nextTaskId + 1);
  };

  const editTask = (taskId, editedTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: editedTitle } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <TaskForm onTaskAdd={addTask} />
      <TaskList
        tasks={tasks}
        onTaskEdit={editTask}
        onTaskDelete={deleteTask}
      />
    </div>
  );
}

export default App;
