import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import Index from './components/apostila_003/index';
import Apostila_004 from './components/apostila_004';

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila_004 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});
