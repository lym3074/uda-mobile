import React, {useState} from "react";
import { InputContainer, TextInput, Icon, BtnText, AuthCntText, SendBtn} from "./style";

const PhoneAuthForm = (props: any) => {
    const {setMode} = props;
    const [displayAuth, setDisplayAuth] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const sendPhoneNumber = () => {
        setDisplayAuth(true)
        setIsSubmit(true);
    }

    const sendAuthNumber = () => {
        setDisplayAuth(false)
        setIsSubmit(false);
        setMode({
        login: true,
        mobileAuth: false
        });
    }

    return (
        <>
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
        </>
    )
}

export default PhoneAuthForm;