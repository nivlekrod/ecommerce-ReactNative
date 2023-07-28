import React from "react";
import { View, Text, StyleSheet } from "react-native";


export function Sellers(){
    return(
        <View style={styles.container}>
                <Text>
                    Vendedores
                </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

})