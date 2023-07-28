import React from "react"
import {View,Text,Button,StyleSheet,TextInput} from "react-native"
import Responsive from 'react-native-lightweight-responsive';
import theme from "../../../global/theme";
import { MyButton } from "../../../components/Forms/MyButton";
import { MyInput } from "../../../components/Forms/MyInput";
import { SocialButton } from "../../../components/Forms/SocialButton/SocialButton";


const Login  = ()=>{
    return(
        <View style={styles.container}>
           <Text style={styles.title}>Entrar</Text> 
           <View style={styles.form}>
           <Text style={styles.inputTitle}>Email</Text>
           <MyInput placeholder="example@mail.com"/>
           <Text style={styles.inputTitle}>Senha</Text>
           <MyInput placeholder="password"/>
            <MyButton title='Entrar'/>
            <View style={{alignItems: "center"}}>
                <Text style={styles.subtitle}>Ou acesse com suas redes sociais</Text>        
            </View>
            <View style={styles.social}>
                    <SocialButton title="Twitter" name="twitter"/>

                    <SocialButton title="Facebook" name="facebook" btnColor=""/>
            </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
    fontSize:Responsive.font(26),
    color:theme.colors.title,
    fontWeight:"bold"
    },
    inputTitle:{
    fontSize:Responsive.font(14),
    color:theme.colors.primary,
    fontWeight:"bold"

    },
    form:{
        width:"100%",
        justifyContent:"center",
        padding:Responsive.font(24)
    },
    input:{
        width:"100%",
        borderBottomWidth:Responsive.font(1),
        paddingVertical:Responsive.font(2),
        fontSize:Responsive.font(13),
        borderColor:theme.colors.subtitle,
        marginBottom:Responsive.font(16)


    }, subtitle:{
        fontSize:Responsive.font(14),
        color: theme.colors.subtitle,
    }, social:{
        flexDirection:"row",
        justifyContent: "space-between"
    }

})
 
export{Login}
