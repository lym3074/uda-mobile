import React, { useRef, useState } from "react";
import { Animated, LayoutAnimation, View } from "react-native";
import styled from "styled-components/native";
import { Container, Header, UdaLogo, FormContainer, InputContainer, TextInput, Icon, LogInBtn, SendBtn, BtnText, AuthCntText, FooterText, SignInBtn, SignInText, Footer } from "./style";
import { WriteIcon, MainLogo } from "../../assets/images";

import { LoginForm, PhoneAuthForm, SignUpForm } from "../../Components/SignIn";
interface SignMode {
  login: boolean,
  mobileAuth: boolean,
  signUp: boolean
}

const initSignMode = {
  login: true,
  mobileAuth: false,
  signUp: false
}

const SignIn = ({navigation: {navigate}}: any) => {
  const [mode, setMode] = useState<SignMode>(initSignMode);

  return (
      <Container>
        <Header>
          <UdaLogo source={MainLogo}/>
        </Header>
        <FormContainer>
          {/* {mode.login && <LoginForm setMode={setMode} />}
          {mode.mobileAuth && <PhoneAuthForm setMode={setMode} />}
          {mode.signUp && <PhoneAuthForm setMode={setMode} />} */}
          <SignUpForm />
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