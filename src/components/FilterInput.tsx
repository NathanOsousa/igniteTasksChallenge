import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';

interface FilterInput {
  theme: string;
  filterTasks: (term: string) => void;
}

export function FilterInput({filterTasks, theme}: FilterInput) {
  const [term, setTerm] = useState('');

  function handleFilterTasks() {
    filterTasks(term);
  }
  useEffect(() => {
    filterTasks(term);
  }, [term]);

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
        placeholder="Pesquise aqui"
        placeholderTextColor={theme === 'dark' ? '#E1E1E6' : '#212136'}
        returnKeyType="send"
        onChangeText={item => setTerm(item)}
        value={term}
        onSubmitEditing={handleFilterTasks}
      />
    </View>
  );
}

const styles = (theme: string) => {
  return StyleSheet.create({
    inputContainer: {
      backgroundColor: theme === 'dark' ? '#413A6F' : '#F5F4F8',
      borderRadius: 5,
      marginTop: 1,
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
      backgroundColor: theme === 'dark' ? '#9347CA' : '#3FAD27',
      height: 50,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  });
};
