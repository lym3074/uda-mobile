import React, { useRef, useState } from "react";
import { Animated, LayoutAnimation, View } from "react-native";
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

const FormContainer = styled(Animated.createAnimatedComponent(View))`
  background-color: white;
  width: 300px;
  border-radius: 20px;
  align-items: center;
  justify-content: flex-end;
  padding : 25px 30px;
`;

const InputContainer: any = styled.View`
  margin-top: ${(props: any) => props.topSpace};
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #B9B9B9;
  width: 100%;
  height: 50px;
`

const TextInput = styled.TextInput`
  width: 60%;
  margin: 0px 10px;
  font-size: 15px;
  font-family: 'MICEGothicBold';
`;

const Icon = styled.Image``;

const LogInBtn = styled.TouchableOpacity`
  margin-top: 50px;
  background-color: #0ABAB5;
  border-radius: 5px;
  width: 130px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const SendBtn = styled.TouchableOpacity`
  background-color: #0ABAB5;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 100;
`;

const BtnText = styled.Text`
  color: white;
  font-size: 17px;
  font-family: 'MICEGothicBold';
  letter-spacing: 2px;
`;

const AuthCntText = styled.Text`
  color: grey;
  font-size: 17px;
  font-family: 'MICEGothicBold';
  letter-spacing: 2px;
`;

const FooterText = styled.Text`
  font-size: 16px;
  font-family: 'MICEGothicBold';
  color: white;
  padding-right: 5px;
  letter-spacing: 1.2px;
`;

const SignInBtn = styled.TouchableOpacity`

`;

const SignInText = styled.Text`
  font-size: 16px;
  font-family: 'MICEGothicBold';
  color: #335E5C;
  letter-spacing: 1.2px;
`;

const Footer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  flex: 1;
  margin-bottom: 10px;
`;

const SignIn = ({navigation: {navigate}}: any) => {

  const [mode, setMode] = useState(false);

  return (
      <Container>
        <Header>
          <UdaLogo source={require('../../assets/_Logo.png')}/>
        </Header>
        {mode 
        ?<MobileAuthForm setMode={setMode} />
        :<LoginForm setMode={setMode}/>}
        
        <Footer>
          <FooterText>
            우다가 처음이신가요?
          </FooterText>
          <SignInBtn onPress={() => navigate('SignUp')}>
            <SignInText>회원가입</SignInText>
          </SignInBtn>
        </Footer>
      </Container>
  )
}

const MobileAuthForm = (props: any) => {
  const {setMode} = props;
  const [displayAuth, setDisplayAuth] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const sendPhoneNumber = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setDisplayAuth(true)
    setIsSubmit(true);
  }

  const sendAuthNumber = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setDisplayAuth(false)
    setIsSubmit(false);
    setMode(false);
  }

  return (
    <FormContainer>
      <InputContainer>
        <Icon source={require('../../assets/icon_phone.png')}/>
        <TextInput 
          selectionColor={'#0ABAB5'}
          returnKeyType="next"
        />
        {isSubmit
        ? <AuthCntText>3:00</AuthCntText>
        : <SendBtn onPress={sendPhoneNumber}>
            <BtnText>전송</BtnText>
          </SendBtn>
        }
        
      </InputContainer>
      {displayAuth && (
        <InputContainer topSpace={20}>
        <Icon source={require('../../assets/icon_lock.png')}/>
        <TextInput 
          selectionColor={'#0ABAB5'}
          returnKeyType="next"
        />
        <SendBtn onPress={sendAuthNumber}>
          <BtnText>인증</BtnText>
        </SendBtn>
      </InputContainer>
      )}
    </FormContainer>
  )
}

const LoginForm = (props: any) => {
  const {setMode} = props;
  const passwordInput: any = useRef(null);
    const position = useRef(new Animated.Value(0)).current;

    const goLeft = Animated.timing(position, {
        toValue: -500,
        useNativeDriver: true,
        duration: 200
    });

    const showPhoneAuthForm = () => {
      goLeft.start()
      setTimeout(() => {
        LayoutAnimation.easeInEaseOut();
        setMode(true)
      }, 200)
      
    }

    const jumpToPassword = () => {
      passwordInput.current.focus();
    }
  return (
    <FormContainer style={{transform:[{translateX: position}]}}>
      <InputContainer topSpace={100}>
        <Icon source={require('../../assets/icon_ID.png')}/>
        <TextInput 
          selectionColor={'#0ABAB5'}
          returnKeyType="next"
          onSubmitEditing={jumpToPassword}
        />
      </InputContainer>
      <InputContainer topSpace={10}>
        <Icon source={require('../../assets/icon_password.png')}/>
        <TextInput 
          ref={passwordInput}
          selectionColor={'#0ABAB5'}
          secureTextEntry
          placeholder="Password"
          returnKeyType="done"
        />
      </InputContainer>
      <LogInBtn onPress={showPhoneAuthForm}>
        <BtnText >로그인</BtnText>
      </LogInBtn>
    </FormContainer>
  )
}

export default SignIn;