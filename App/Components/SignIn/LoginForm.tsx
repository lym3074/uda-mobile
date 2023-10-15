import React, { useRef } from "react";
import { InputContainer, TextInput, Icon, LogInBtn, BtnText} from "./style";

const LoginForm = (props: any) => {
  const {setMode} = props;
  const passwordInput: any = useRef(null);

  const showPhoneAuthForm = () => {
    setMode(() => ({
      login: false,
      mobileAuth: true
    }))
  };

  const jumpToPassword = () => {
    passwordInput.current.focus();
  }

  return (
    <>
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
          <BtnText>로그인</BtnText>
        </LogInBtn>
    </>
  )
}

export default LoginForm;