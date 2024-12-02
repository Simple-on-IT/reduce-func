import React, { useState } from 'react';
import './App.css'; // Подключение CSS файла
import { Task } from '../model/types/task';
import { initialTasks, taskTypeDirectory } from '../model/constants/tasks';

// useMemo не используем, дабы не усложнять задачу
const App: React.FC = () => {

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // Подсчет общего бюджета
  // const totalBudget = tasks.reduce

  // Подсчет выполненных задач
  // const completedTasksCount = tasks.

  // Группировка задач по типу
  // const tasksByType = tasks.reduce<Record<string, Task[]>>((result, task) => {

  // }, {});

  // Обработчик переключения статуса задачи
  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h1 className="header">🎄 Планировщик Нового года</h1>

      <h2 className="sub-header">🛠️ Задачи:</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? 'completed' : 'not-completed'}`}
            onClick={() => toggleTaskCompletion(task.id)} // Отметка выполнено/не выполнено
          >
            <strong>{task.title}</strong> — {task.cost} руб. [{taskTypeDirectory[task.type]}] —{' '}
            <span>{task.completed ? '✅ Выполнено' : '❌ Не выполнено'}</span>
          </li>
        ))}
      </ul>

      {/* <h2 className="sub-header">💰 Общий бюджет: {totalBudget} руб.</h2> */}
      {/* <h2 className="sub-header">
        ✔️ Выполнено задач: {completedTasksCount} из {tasks.length}
      </h2> */}

      <h2 className="sub-header">📊 Задачи по категориям:</h2>
      {/* {Object.entries(tasksByType).map(([type, tasks]) => (
        <div key={type} className="category">
          <h3 className="category-header">{taskTypeDirectory[type]}:</h3>
          <ul className="category-list">
            {tasks.map((task) => (
              <li key={task.id} className="category-item">
                {task.title} — {task.cost} руб.
              </li>
            ))}
          </ul>
        </div>
      ))} */}
    </div>
  );
};

export default App;
