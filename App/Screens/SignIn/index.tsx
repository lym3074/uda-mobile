import React, { useRef } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #0ABAB5;
`;

const UdaLogo = styled.Image`
  margin-bottom : 20px;
`;

const FormContainer = styled.View`
  background-color: white;
  width: 70%;
  height: 40%;
  border-radius: 30px;
  align-items: center;
  justify-content: flex-end;
  padding : 50px 30px;
`;

const InputContainer = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #B9B9B9;
  width: 100%;
  height: 50px;
`

const TextInput = styled.TextInput`
  width: 80%;
  margin-left: 10px;
  font-size: 18px;
  
`;

const Icon = styled.Image``;

const LogInBtn = styled.TouchableOpacity`
  margin-top: 60px;
  background-color: #0ABAB5;
  border-radius: 5px;
  width: 130px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const LogInBtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-family: 'MICEGothicBold';
  letter-spacing: 3px;
`;

const SignIn = () => {
    const passwordInput: any = useRef(null);

    const jumpToPassword = () => {
      passwordInput.current.focus();
    }

    return (
        <Container>
          <UdaLogo source={require('../../assets/_Logo.png')}/>
          <FormContainer>
            <InputContainer>
              <Icon source={require('../../assets/icon_ID.png')}/>
              <TextInput 
                selectionColor={'#0ABAB5'}
                returnKeyType="next"
                onSubmitEditing={jumpToPassword}
              />
            </InputContainer>
            <InputContainer>
              <Icon source={require('../../assets/icon_password.png')}/>
              <TextInput 
                ref={passwordInput}
                selectionColor={'#0ABAB5'}
                secureTextEntry
                placeholder="Password"
                returnKeyType="done"
              />
            </InputContainer>
            <LogInBtn>
              <LogInBtnText>로그인</LogInBtnText>
            </LogInBtn>
          </FormContainer>
        </Container>
    )
}

export default SignIn;