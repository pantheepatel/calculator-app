import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './Views/MainScreen';
import IntroScreen from './Views/IntroScreen';

export default function App() {
  const [loading, setIsLoading] = useState(true)
  setTimeout(() => {
    setIsLoading(false)
  }, 3000)
  return (
    <View>
      {loading ? <IntroScreen /> : <MainScreen/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
