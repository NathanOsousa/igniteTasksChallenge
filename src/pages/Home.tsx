import React, {useState} from 'react';

import {Header} from '../components/Header';
import {MyTasksList} from '../components/MyTasksList';
import {TodoInput} from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== '') {
      const aux = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };

      setTasks(prevState => [...prevState, aux]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    const edditedTaks = tasks.map(item => {
      if (item.id === id) {
        if (item.done) {
          item.done = false;
        } else {
          item.done = true;
        }
      }
      return item;
    });
    setTasks(edditedTaks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter(item => item.id !== id);
    setTasks(newTasks);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
