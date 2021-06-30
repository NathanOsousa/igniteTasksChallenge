import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Header} from '../components/Header';
import {MyTasksList} from '../components/MyTasksList';
import {TodoInput} from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}
interface Theme {
  theme: string;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState<Theme['theme']>('dark');

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
      <Header theme={theme} />

      <TodoInput addTask={handleAddTask} theme={theme} />
      <TouchableOpacity
        style={{backgroundColor: 'red', height: 20, width: 20, zIndex: 10}}
        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <MyTasksList
        theme={theme}
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
