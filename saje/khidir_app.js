import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Post from './components/Post';

export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    width: 366,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
