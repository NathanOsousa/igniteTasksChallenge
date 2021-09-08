import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Header} from '../components/Header';
import {MyTasksList} from '../components/MyTasksList';
import {TodoInput} from '../components/TodoInput';
import {FilterInput} from '../components/FilterInput';

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
  const [FilteredTasks, setFilteredTasks] = useState<Task[]>([]);
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

  function filterTasks(term: string) {
    if (!term) {
      setFilteredTasks([]);
      return;
    }
    const filtered = tasks.filter(item => item.title.indexOf(term) > -1);
    setFilteredTasks(filtered);
  }

  return (
    <View
      style={{
        backgroundColor: theme === 'dark' ? '#191D3A' : '#F5F4F8',
        flexGrow: 1,
      }}>
      <Header theme={theme} />

      <TodoInput addTask={handleAddTask} theme={theme} />
      <FilterInput filterTasks={filterTasks} theme={theme} />
      <TouchableOpacity
        style={{backgroundColor: 'black', height: 20, width: 20}}
        onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <MyTasksList
        theme={theme}
        tasks={FilteredTasks.length > 0 ? FilteredTasks : tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  );
}
