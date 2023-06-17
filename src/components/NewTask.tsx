import { useState, FormEvent, ChangeEvent } from "react";

import { Input } from "./Input";
import { Button } from "./Button";

import IconPlus from "../assets/plus.svg";

import styles from "./NewTask.module.css";

interface NewTaskProps {
  createTask: (title: string) => void;
}

export function NewTask({ createTask }: NewTaskProps) {
  const [title, setTitle] = useState("");

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setTitle(event.target.value);
  }

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    createTask(title);

    setTitle("");
  };

  return (
    <form className={styles.newTask} onSubmit={handleCreateNewTask}>
      <Input
        name="title"
        value={title}
        placeholder="Adicione uma nova tarefa"
        onChange={handleTitleChange}
        required
      />
      <Button>
        Criar
        <img src={IconPlus} alt="IconPlus" />
      </Button>
    </form>
  );
}
