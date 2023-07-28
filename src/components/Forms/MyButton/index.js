import React from "react"
import {StyleSheet, Text, TouchableOpacity} from "react-native"
import Responsive from 'react-native-lightweight-responsive';
import theme from "../../../global/theme";


export function MyButton ({title,...props}){
    return(
        <TouchableOpacity>
        <Text style={styles.title}>
            {title}
        </Text>
        </TouchableOpacity>
    );    

}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        backgroundColor:theme.colors.primary,
        padding: Responsive.font(8),
        borderRadius: Responsive.font(5),
        alignItems:"center",
        marginVertical:Responsive.font(10)
    },
    title:{
        fontWright: Responsive.font(14),
        color: "#ffffff",
        fontSize: Responsive.font(16),
        backgroundColor: 'blue',    
        textAlign: 'center',
        padding: Responsive.font(8),
        borderRadius: Responsive.font(8),
        marginVertical: Responsive.font(16)
    }
})