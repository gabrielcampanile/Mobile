import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultIMC from './ResultIMC/';
import styles from "./style";

export default function Form() {

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("preencha o peso e a altura");
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular IMC")

function imcCalculator() {
    return setImc((weight/(height*height)).toFixed(2))
}

function validationImc() {
    if(weight != null && height != null) {
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é igual:")
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular IMC")
    setMessageImc("preencha o peso e a altura")
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                style={styles.input} 
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75" 
                keyboardType="decimal"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365" 
                keyboardType="decimal"
                />
                <TouchableOpacity
                style={styles.buttonCalculator}
                    onPress={() => {validationImc()}}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}