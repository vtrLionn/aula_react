import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center', 
      backgroundColor: '#F5F5F5', 
      padding: 8,
      width:'100%',
      //alignItems: 'center',
    }, 
    paragraph: {
      margin: 24, 
      fontSize: 26, 
      fontWeight: 'bold', 
      textAlign: 'center', 
      color: '#9E9E9E', 
    }, 
    button: {
      backgroundColor: '#9E9E9E', 
      height: 60, 
      justifyContent: 'center',
       
    }, 
    textButton: {
      fontSize: 20, 
      color: '#fff', 
      textAlign: 'center', 
    }, 
    counter: {
      borderWidth: 2, 
      borderColor: '#9E9E9E', 
      padding: 8,  
      marginTop: 60, 
      justifyContent: 'center',
    }, 
    textCounter: {
      fontSize: 32, 
      color: '#424242', 
      textAlign: 'center',    
      fontWeight: 'bold', 
      padding: 8, 
    }
  });

  export default styles;