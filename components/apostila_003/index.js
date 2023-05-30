import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Index() {
  return(
    <View style={styles.container}>
        <Text style={styles.paragraph}>
            Exemplo 3
        </Text>  

        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifycontent: 'center',
    backgroundcolor:'#f5f5f5',
    padding: 8,
  },
  paragraph:{
    margin: 24,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#9E9E9E',
  },
});
