import React from 'react';
import { StyleSheet, View, Image, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('./assets/_Logo.png')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ABAB5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
