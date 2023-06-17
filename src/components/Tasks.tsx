import { Task } from "./Task";

import Clipboard from "../assets/clipboard.svg";

import styles from "./Tasks.module.css";

import { ITask } from "../App";

interface TasksProps {
  tasks: ITask[];
  deleteTask: (title: string) => void;
  toggleTask: (title: string) => void;
}

export function Tasks({ tasks, toggleTask, deleteTask }: TasksProps) {
  const isEmpty = !tasks.length;
  const total = tasks.length;
  const completed = tasks.reduce((acc, task) => {
    if (task.checked) ++acc;

    return acc;
  }, 0);

  return (
    <div className={styles.tasks}>
      <div className={styles.header}>
        <span>
          <p>Tarefas criadas</p>
          <strong className={styles.counter}>{total}</strong>
        </span>
        <span>
          <p>Concluídas</p>
          <strong className={styles.counter}>
            {isEmpty ? 0 : `${completed} de ${total}`}
          </strong>
        </span>
      </div>

      <div className={isEmpty ? styles.todos : ""}>
        {!isEmpty ? (
          <div className={styles.list}>
            {tasks.map((task) => (
              <Task
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <img src={Clipboard} alt="Clipboard" />

            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </div>
  );
}
