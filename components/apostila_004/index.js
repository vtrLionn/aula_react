import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';



function Index(){

    const [valorEntrada, setValorEntrada] = useState('Saída de texto');
    const [mensagem, setMensagem] = useState('Mensagem');

    return(
        <View style={styles.container}>
            <Text style={styles.texto}> Exemplo 4 </Text>

            <Text style={styles.txtSaida}>{mensagem}</Text>

            <TextInput style={styles.txtEntrada} keyboardType='default' onChangeText={(saida) => setValorEntrada (saida)} value={valorEntrada} />

            <TouchableOpacity style={styles.button} onPress={() => {setMensagem(valorEntrada); setValorEntrada('');}} > 
                <Text style={styles.textButton}>Exibir mensagem</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Index;
