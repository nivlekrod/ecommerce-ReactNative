import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Responsive from 'react-native-lightweight-responsive';
import theme from "../../../global/theme";

export function MyInput({...props}){
    return(
        <View style={styles.container}>
            <TextInput
                {...props}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        paddingVertical:Responsive.font(18),
        paddingBottom:Responsive.font(2),
        fontSize:Responsive.font(13),
        borderBottomWidth:  Responsive.font(1),
        borderColor: theme.colors.primary,
        marginBottom:Responsive.font(16)
            
                },
})