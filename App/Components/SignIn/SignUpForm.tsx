import React, { useRef } from "react";
import { InputContainer, TextInput, Icon, LogInBtn, BtnText, ProfileWrapper} from "./style";
import { WriteIcon, PwIcon, EmailIcon, CalendarIcon, EmptyProfile } from "../../assets/images";

const SignUpForm = (props: any) => {
  const {setMode} = props;
  const passwordInput: any = useRef(null);
  const bDateInput: any = useRef(null);
  const emailInput: any = useRef(null);

  const submitSignUpInfo = () => {
    console.log("회원 가입이 성공하였습니다.");
    setMode((prev: any) => ({
      ...prev,
      login: true,
      signUp: false
    }))
  };

  const jumpToNextInput = (nextRef: any) => {
    nextRef.current.focus();
  };

  return (
    <>
      <ProfileWrapper onPress={() => {console.log("프사 선택으로 이동")}}>
        <Icon source={EmptyProfile}/>
      </ProfileWrapper>
      <InputContainer>
        <Icon source={WriteIcon}/>
        <TextInput
          selectionColor={'#0ABAB5'}
          placeholder="id"
          returnKeyType="next"
          onSubmitEditing={() => jumpToNextInput(passwordInput)}
        />
      </InputContainer>
      <InputContainer topSpace={10}>
        <Icon source={PwIcon}/>
        <TextInput
          ref={passwordInput}
          selectionColor={'#0ABAB5'}
          secureTextEntry
          placeholder="Password"
          returnKeyType="next"
          onSubmitEditing={() => jumpToNextInput(bDateInput)}
        />
      </InputContainer>
      <InputContainer topSpace={10}>
        <Icon source={CalendarIcon}/>
        <TextInput
          ref={bDateInput}
          selectionColor={'#0ABAB5'}
          placeholder="Birth date"
          returnKeyType="next"
          onSubmitEditing={() => jumpToNextInput(emailInput)}
        />
      </InputContainer>
      <InputContainer topSpace={10}>
        <Icon source={EmailIcon}/>
        <TextInput
          ref={emailInput}
          selectionColor={'#0ABAB5'}
          placeholder="E-mail"
          returnKeyType="done"
        />
      </InputContainer>
      <LogInBtn onPress={submitSignUpInfo}>
        <BtnText>회원가입</BtnText>
      </LogInBtn>
    </>
  )
}

export default SignUpForm;