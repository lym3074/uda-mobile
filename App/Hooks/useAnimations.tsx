import React, { useRef } from "react";
import { Animated, PanResponder } from "react-native";

const useAnimations = () => {
 const hideComponents = useRef(new Animated.Value(1)).current;

 const hide = () => Animated.timing(hideComponents, {
    toValue: 0,
    useNativeDriver: true
 })
}

export default useAnimations;