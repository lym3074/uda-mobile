import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from '../Navigators/MainNavigator';
import AuthNavigation from '../Navigators/AuthNavigator';
import SplashScreen from "react-native-splash-screen";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000); //스플래시 활성화 시간
  });

  return (
    <NavigationContainer>
      {isLogin ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
}
