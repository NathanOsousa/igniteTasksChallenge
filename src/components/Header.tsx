import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
interface HeaderProps {
  theme: string;
}
export function Header({theme}: HeaderProps) {
  return (
    <View style={styles(theme).header}>
      <Text style={styles(theme).headerText}>to.</Text>
      <Text style={styles(theme).headerText}>do</Text>
    </View>
  );
}
const styles = (theme: string) => {
  return StyleSheet.create({
    header: {
      paddingTop: StatusBar.currentHeight,
      paddingBottom: 44,
      backgroundColor: theme === 'dark' ? '#191932' : '#273FAD',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    headerText: {
      fontSize: 24,
      color: '#FFF',
      fontFamily: 'Poppins-Regular',
    },
  });
};
