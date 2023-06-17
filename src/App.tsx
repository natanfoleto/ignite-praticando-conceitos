import { useState } from "react";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

import styles from "./App.module.css";

import "./global.css";

export interface ITask {
  title: string;
  checked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const createTask = (title: string) => {
    const taskAlreadyExists = tasks.some((task) => task.title === title);

    if (taskAlreadyExists) {
      alert("Essa tarefa já foi criada.");

      return;
    }

    setTasks([
      ...tasks,
      {
        title,
        checked: false,
      },
    ]);
  };

  const toggleTask = (title: string) => {
    const newTasks = tasks.map((task) => {
      if (task.title === title) return { ...task, checked: !task.checked };

      return task;
    });

    setTasks(newTasks);
  };

  const deleteTask = (title: string) => {
    const newTasks = tasks.filter((task) => task.title !== title);

    setTasks(newTasks);
  };

  return (
    <div>
      <Header />

      <main className={styles.main}>
        <NewTask createTask={createTask} />
        <Tasks tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      </main>
    </div>
  );
}

export default App;
