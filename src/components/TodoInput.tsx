import React, {useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  theme: string;
  addTask: (task: string) => void;
}

export function TodoInput({addTask, theme}: TodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

  return (
    <View
      style={[
        styles(theme).inputContainer,
        Platform.OS === 'ios'
          ? styles(theme).inputIOSShadow
          : styles(theme).inputAndroidShadow,
      ]}>
      <TextInput
        style={styles(theme).input}
        placeholder="Adicionar novo todo..."
        placeholderTextColor={theme === 'dark' ? '#E1E1E6' : '#212136'}
        returnKeyType="send"
        onChangeText={item => setTask(item)}
        value={task}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={styles(theme).addButton}
        onPress={handleAddNewTask}>
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = (theme: string) => {
  return StyleSheet.create({
    inputContainer: {
      backgroundColor: theme === 'dark' ? '#212136' : '#F5F4F8',
      borderRadius: 5,
      marginTop: -25,
      marginHorizontal: 40,
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      paddingLeft: 12,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    inputIOSShadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    inputAndroidShadow: {
      elevation: 5,
    },
    addButton: {
      backgroundColor: '#3FAD27',
      height: 50,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  });
};
