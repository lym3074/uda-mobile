import React, { useRef } from "react";
import { InputContainer, TextInput, Icon, LogInBtn, BtnText} from "./style";

import { IdIcon, PwIcon } from "../../assets/images";
import { useQuery } from "react-query";
import { LoginAPI } from "../../Api/LoginApi";

const LoginForm = (props: any) => {
  const {setMode} = props;
  const {isLoading: todayLoading, data: todayData } = useQuery(["login", "today"], LoginAPI.login);
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
          <Icon source={IdIcon}/>
          <TextInput 
            selectionColor={'#0ABAB5'}
            returnKeyType="next"
            onSubmitEditing={jumpToPassword}
          />
        </InputContainer>
        <InputContainer topSpace={10}>
          <Icon source={PwIcon}/>
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