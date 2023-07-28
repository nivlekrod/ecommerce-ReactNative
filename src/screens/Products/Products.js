import React from "react";
import { View, Text, StyleSheet } from "react-native";


export function Products(){
    return(
        <View style={styles.container}>
                <Text>
                    Produtos
                </Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

})