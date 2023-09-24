import React from 'react';
import { StyleSheet, View, Image, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/_Logo.png')} />
      </View>

      <View style={styles.body}>
        <View style={styles.cardDialogContainer}>
          <View style={{borderStyle:"solid", borderBottomWidth: 2, marginHorizontal: 20}}></View>
        </View>
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
  header: {flex: 1, justifyContent: "center"},
  body: { 
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
  },
  cardDialogContainer: {
    backgroundColor: "white",
    height: "60%",
    width: "75%",
    borderRadius: 20,
    justifyContent: "center"
  }
  
});
