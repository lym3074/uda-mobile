import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #0ABAB5;
`;

const UdaLogo = styled.Image``;


const SignIn = () => {
    return (
        <Container>
          <UdaLogo source={require('../../assets/_Logo.png')}/>

        </Container>
    )
}

export default SignIn

{/* <View style={styles.header}>
        <Image source={require('../assets/_Logo.png')} />
      </View>

      <View style={styles.body}>
        <View style={styles.cardDialogContainer}>
          <View style={{borderStyle:"solid", borderBottomWidth: 2, marginHorizontal: 20, height: 50}}></View>
          <View style={{borderStyle:"solid", borderBottomWidth: 2, marginHorizontal: 20, height: 50}}></View>
        </View>
      </View> */}

      // const styles = StyleSheet.create({
      //   container: {
      //     flex: 1,
      //     backgroundColor: '#0ABAB5',
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //   },
      //   header: {flex: 1, justifyContent: "center"},
      //   body: { 
      //     flex: 2,
      //     justifyContent: "flex-start",
      //     alignItems: "center",
      //     width: "100%"
      //   },
      //   cardDialogContainer: {
      //     backgroundColor: "white",
      //     height: "60%",
      //     width: "75%",
      //     borderRadius: 20,
      //     justifyContent: "center"
      //   }
        
      // });