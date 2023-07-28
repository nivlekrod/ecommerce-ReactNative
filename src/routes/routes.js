import React from "react";
import { Products } from "../screens/Products/Products";
import { Sellers } from "../screens/User/Sellers/Sellers";
import { Categories } from "../screens/Category/Categories";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


const {Navigator, Screen } = createMaterialTopTabNavigator();

export function AppRoutes(){
    return(
        <Navigator>
                <Screen name="Products" component={Products}/>
                <Screen name="Sellers" component={Sellers}/>
                <Screen name="Categories" component={Categories}/> 
        </Navigator>
    )
}