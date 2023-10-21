import React, { useState} from "react";
import { Container, Header, UdaLogo, FormContainer, FooterText, SignInBtn, SignInText, Footer } from "./style";
import { MainLogo } from "../../assets/images";
import { InviteForm, LoginForm, PhoneAuthForm, SignUpForm } from "../../Components/SignIn";

interface SignMode {
  login: boolean,
  mobileAuth: boolean,
  signUp: boolean,
  invite: boolean
}

const initSignMode = {
  login: false,
  mobileAuth: false,
  signUp: false,
  invite: true
}

const SignIn = ({navigation: {navigate}}: any) => {
  const [mode, setMode] = useState<SignMode>(initSignMode);

  const goToSignUpForm = () => {
    setMode((prev) => (
      {
        ...prev,
        login: false,
        signUp: true
      }
    ))
  }

  return (
      <Container>
        <Header>
          <UdaLogo source={MainLogo}/>
        </Header>
        <FormContainer>
          {mode.login && <LoginForm setMode={setMode} />}
          {mode.mobileAuth && <PhoneAuthForm setMode={setMode} />}
          {mode.signUp && <SignUpForm setMode={setMode} />}
          {mode.invite && <InviteForm />}
        </FormContainer>
        <Footer>
          <FooterText>
            우다가 처음이신가요?
          </FooterText>
          <SignInBtn onPress={goToSignUpForm}>
            <SignInText>회원가입</SignInText>
          </SignInBtn>
        </Footer>
      </Container>
  )
}

export default SignIn;