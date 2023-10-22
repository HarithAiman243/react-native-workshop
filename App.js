import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Post from './components/Post';
import { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './pages/homescreen';
import Contentscreen from './pages/contentscreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Content" component={Contentscreen} />

    </Stack.Navigator>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 64,
    //height: 200,
    //width: 366,
    //alignItems: 'center',
    //flexDirection: 'column',   // By default is column.
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue',
  },
});
