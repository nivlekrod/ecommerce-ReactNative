import React from "react"
import {FontAwesome5} from "@expo/vector-icons"
import {StyleSheet, Text, TouchableOpacity} from "react-native"
import Responsive from 'react-native-lightweight-responsive';
import { View } from "react-native-web";
import theme from "../../../global/theme";



export function SocialButton({title,btnColor,name,...props}){
    return (
        <TouchableOpacity{...props} style={styles.container}>
            <FontAwesome5 name={name} size={24} color="#fff" backgroundColor={btnColor}/>
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
    container:{
        width: "48%",
        backgroundColor: theme.colors.primary, 
        padding: Responsive.font(8),
        borderRadius: Responsive.font(5),
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-evenly",
        marginVertical: Responsive.font(16),
    
    },
    title:{
        fontWeight:"bold",
        color: "#fff",
        fontSize: Responsive.font(16),
    }


})