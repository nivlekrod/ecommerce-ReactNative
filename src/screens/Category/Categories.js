import React from "react";
import { View, Text, StyleSheet } from "react-native";


export function Categories(){
    return(
        <View style={styles.container}>
                <Text>
                    Categorias
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