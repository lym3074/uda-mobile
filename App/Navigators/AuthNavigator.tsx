import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";

const Navigation = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Navigation.Navigator screenOptions={{headerShown: false}}>
            <Navigation.Screen name={"SignIn"} component={SignIn}/>
            <Navigation.Screen name={"SignUp"} component={SignUp}/>
        </Navigation.Navigator>
    )
};

export default AuthNavigation;