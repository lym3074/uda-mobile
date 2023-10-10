import React, { useRef } from "react";
import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #0ABAB5;
`;

const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const UdaLogo = styled.Image`
  margin-bottom : 20px;
`;

const FormContainer = styled.View`
  background-color: white;
  width: 70%;
  height: 50%;
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
  font-size: 15px;
  font-family: 'MICEGothicBold';
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

const FooterText = styled.Text`
  font-size: 17px;
  font-family: 'MICEGothicBold';
  color: white;
  padding-right: 5px;
`;

const SignInBtn = styled.TouchableOpacity`

`;

const SignInText = styled.Text`
  font-size: 17px;
  font-family: 'MICEGothicBold';
  color: black;
`;
const Footer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  flex: 1;
`;

const SignIn = () => {
    const passwordInput: any = useRef(null);

    const jumpToPassword = () => {
      passwordInput.current.focus();
    }

    return (
        <Container>
          <Header>
            <UdaLogo source={require('../../assets/_Logo.png')}/>
          </Header>
          
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

          <Footer>
            <FooterText>
              우다가 처음이신가요?
            </FooterText>
            <SignInBtn>
              <SignInText>회원가입</SignInText>
            </SignInBtn>
            

          </Footer>
          
        </Container>
    )
}

export default SignIn;