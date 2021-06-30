import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

interface HeaderProps {
  theme: string;
}
export function Header({theme}: HeaderProps) {
  return (
    <SafeAreaView style={styles(theme).container}>
      <View style={styles(theme).header}>
        <Text style={styles().headerText}>to.</Text>
        <Text style={[styles().headerText, {fontFamily: 'Poppins-SemiBold'}]}>
          do
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = (theme: string = 'dark') => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme === 'dark' ? '#191932' : '#273FAD',
    },
    header: {
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
