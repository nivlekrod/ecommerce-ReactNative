import React from "react";
import { View, Text, StyleSheet } from "react-native";


const MyOrder = () =>{
    return(
        <View style={styles.container}>
        <Text>Meus Pedidos</Text>
        <Text>Pedido #12345 | Data 12/12/99</Text>
        <Text>Vendedor: Vendedor Top</Text>
        <Text>Valor: RS:99</Text>
        <>
        <Text>Pedido #12345 | Data 12/12/99</Text>
        <Text>Vendedor: Vendedor Top</Text>
        <Text>Valor: RS:99</Text>
        </>
        <>
        <Text>Pedido #12345 | Data 12/12/99</Text>
        <Text>Vendedor: Vendedor Top</Text>
        <Text>Valor: RS:99</Text>
        </>
        </View>
    )

}

export{MyOrder};

const styles = StyleSheet.create({
    container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center"

    }
})