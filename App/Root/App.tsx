import React, { useState } from 'react';
import { StyleSheet, View, Image, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from '../Navigators/MainNavigator';
import AuthNavigation from '../Navigators/AuthNavigator';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNavigation />: <AuthNavigation />}
    </NavigationContainer>
  );
}
