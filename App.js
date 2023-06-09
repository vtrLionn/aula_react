import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

//import Index from './components/apostila_003/index';
import Apostila_006 from './components/apostila_006';

const corApp = '#000';

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila_006 />
      <StatusBar style={corApp==='#000' ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: corApp,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Constants.statusBarHeight,
    padding: 8,
  },
});
