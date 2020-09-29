import React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';
import {Profile} from './../pages/Profile'

export function About({ navigation }) {
    const [peso, setPeso] = React.useState(0.00);
    const [altura, setAltura] = React.useState(0.00);
    const [imc, setIMC] = React.useState(0.00);
    const [linguagem, setLinguagem] = React.useState('0')
    console.log("valor que está armazenado em linguagem", linguagem)

    function calculaIMC(peso, altura) {
        var resultado = peso / (altura * altura)
        setIMC(resultado)
        console.log("valor do imc",resultado)

        if(resultado != 0){
            navigation.navigate('Profile',{imc})
        }
       
        
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex:1, justifyContent:'center'}}>
                <TextInput
                    style={{ borderColor: 'gray', width: 200, height: 40, borderWidth: 1, borderRadius: 30, color: '#a0a0a0', paddingLeft: 10 }}
                    placeholder="Digite seu peso"
                    onChangeText={texto => setPeso(texto)}
                    value={peso} >
                </TextInput>
                <TextInput
                    style={{ borderColor: 'gray', width: 200, height: 40, borderWidth: 1, borderRadius: 30, color: '#a0a0a0', paddingLeft: 10, marginTop: 10 }}
                    placeholder="Digite sua altura"
                    onChangeText={texto => setAltura(texto)}
                    value={altura} >
                </TextInput>

                <Picker
                    selectedValue={linguagem}
                    style={{ height: 50, width: 200 }}
                    /* itemStyle={{ color: '#'}} */
                    onValueChange={(itemValue, itemIndex) =>
                        setLinguagem({ linguagem: itemValue })
                    }>
                    <Picker.Item label="Escolha um item" value='0'/>
                    <Picker.Item label="Criança" value="java" />
                    <Picker.Item label="Adulto" value="a" />
                    <Picker.Item label="Idoso" value="js" />
                </Picker>
            </View>
            <View style={{justifyContent:'flex-start'}}>
                <Button title="CALCULAR" color="#eaea" background="black" onPress={() => calculaIMC(peso, altura)} ></Button>
                <Text>IMC: {imc.toFixed(2)}</Text>
            </View>

        </View>
    )
}
