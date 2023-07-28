import React from "react";
import { View, Text, ScrollView } from "react-native";
import Responsive from 'react-native-lightweight-responsive';
import theme from "../../../global/theme";
import {MyButton} from '../../../components/Forms/MyButton'
import { MyInput } from "../../../components/Forms/MyInput";
import { StyleSheet } from "react-native";


const Register = () =>{
    return(
        <ScrollView>
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Criar Conta/Editar Dados</Text>
                <Text style={styles.subtitle}>Nome</Text>
                <MyInput placeholder='Insira seu nome'/>
                <Text style={styles.subtitle}>Rua</Text>
                <MyInput placeholder="Insira sua rua"/>    
            </View>
            <View style={styles.adress}>
                <Text style={styles.subtitle}>Numero</Text>
                <MyInput placeholder='Insira seu numero'/>
                <Text style={styles.subtitle}>Bairro</Text>
                <MyInput placeholder='Insira seu bairro'/>
            </View>
            <View>

                
            </View>
            <View style={styles.container}>
                <Text style={styles.subtitle}>Email</Text>
                <MyInput placeholder='Insira seu email'/>
            </View>
            <View style={styles.container} >
                <Text style={styles.subtitle}>Rua</Text>
                    <MyInput style={styles.subtitle} placeholder="Insira sua rua"/>    
                </View>
            </View>
            <View style={styles.input}>
                <MyButton title={'Salvar'}/>
            </View>
        </ScrollView>

       
    )
}

export {Register};

const styles = StyleSheet.create({
    container:{
       marginHorizontal: Responsive.font(40),
    },
    title:{
        marginVertical: Responsive.font(40),
        fontSize:Responsive.font(26),
        color:theme.colors.title,
        fontWeight:"bold",
    },
    subtitle:{
        fontSize: Responsive.font(13),
        color:theme.colors.primary,
    },
    adress:{
        flexDirection: 'row',
        marginHorizontal: Responsive.font(40),
        marginRight: Responsive.font(100),
        justifyContent: 'space-between',
        width: Responsive.font(90)

    },
    input:{
        marginHorizontal: Responsive.font(40),
        justifyContent: 'center',
    }
   
 
})
 