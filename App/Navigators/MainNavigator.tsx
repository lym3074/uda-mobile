import React from "react";
import styled from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";

const Navigation = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Navigation.Navigator>
            <Navigation.Screen name={"Home"} component={Home} />
        </Navigation.Navigator>
    )
}

export default MainNavigation;