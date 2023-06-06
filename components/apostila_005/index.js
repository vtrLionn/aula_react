import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';



export default function Index (){

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function Soma(){
        const conta = parseInt(n1) + parseInt(n2);
        setTotal(conta.toString());
    }

    function Sub(){
        const conta = parseInt(n1) - parseInt(n2);
        setTotal(conta.toString());
    }

    function Mult(){
        const conta = parseInt(n1) * parseInt(n2);
        setTotal(conta.toString());
    }

    function Div(){
        const conta = parseInt(n1) / parseInt(n2);
        setTotal(conta.toString());
    }


    const limpa = () =>{setTotal('')} ;

    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}> Exemplo 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º Número </Text>
            <TextInput style={styles.txtEntrada} onChangeText={ (entrada) => setN1(entrada)} value={n1} />
            
            <Text style={styles.txtSaida}> </Text>

            <Text style={styles.textLabel}> 2º Número </Text>
            <TextInput style={styles.txtEntrada} onChangeText={ (entrada) => setN2(entrada) } value={n2} />

            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <TextInput style={styles.txtEntrada} editable={false} value={total} />

           <View style={styles.styBut}>
                <TouchableOpacity style={styles.button} onPress={() => Soma()}>
                    <Text style={styles.textButton}> + </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Sub()}>
                    <Text style={styles.textButton}> - </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Mult()}>
                    <Text style={styles.textButton}> * </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Div()}>
                    <Text style={styles.textButton}> / </Text>
                </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.limpBut} onPress={() => limpa()}>
                <Text style={styles.textButton}> Limpar </Text>
            </TouchableOpacity>


        </View>
    );
}

