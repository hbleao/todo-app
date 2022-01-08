import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    setTasks(oldState => [...oldState, {
        id: Math.floor( Math.random() * (1000 - 1) + 1),
       title: newTaskTitle,
       done: false
    }])
  }

  function handleToggleTaskDone(id: number) {
    const filteredTask = tasks.map(task => {
      if(task.id === id) {
        return {
          ...task,
         done: true
        }
      }
      
      return task;
    })
    setTasks(filteredTask);
  }

  function handleRemoveTask(id: number) {
    const filteredTask = tasks.filter(task => task.id !== id)
    setTasks(filteredTask);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})