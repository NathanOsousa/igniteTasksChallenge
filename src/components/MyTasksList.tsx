import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
} from 'react-native';

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  theme: string;
}

export function MyTasksList({
  tasks,
  onLongPress,
  onPress,
  theme,
}: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)}
            onLongPress={() => onLongPress(item.id)}
            style={styles(theme).taskButton}>
            <View
              testID={`marker-${index}`}
              style={[styles(theme).taskMarker]}
            />
            <Text
              style={[
                styles(theme).taskText,
                item.done && styles(theme).taskTextDone,
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      ListHeaderComponent={
        <View style={{marginBottom: 20}}>
          <Text style={styles(theme).header}>Minhas tasks</Text>
        </View>
      }
      style={{
        marginHorizontal: 24,
        marginTop: 32,
      }}
    />
  );
}

const styles = (theme: string = 'dark') => {
  return StyleSheet.create({
    header: {
      color: theme === 'dark' ? '#F5F4F8' : '#3D3D4D',
      fontSize: 24,
      fontFamily: 'Poppins-SemiBold',
    },
    taskButton: {
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginBottom: 4,
      borderRadius: 4,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#413A6F' : '#F5F4F8',
    },
    taskMarker: {
      height: 16,
      width: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: theme === 'dark' ? '#F5F4F8' : '#3D3D4D',
      marginRight: 10,
    },
    taskText: {
      color: theme === 'dark' ? '#F5F4F8' : '#3D3D4D',
    },

    taskMarkerDone: {
      height: 16,
      width: 16,
      borderRadius: 8,
      backgroundColor: '#273FAD',
      marginRight: 10,
    },
    taskTextDone: {
      color: '#A09CB1',
      textDecorationLine: 'line-through',
    },
  });
};
