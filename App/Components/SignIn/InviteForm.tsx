import React, { useState } from "react";
import { InviteText, SendBtn, BtnText, Icon, TextInput } from "../../Screens/SignIn/style";
import { PhoneInputContainer } from "./style";
import { Animated, Easing, Text, View } from "react-native";
import { CalendarIcon, LoadingIcon } from "../../assets/images";
import { LoadingMiniText } from "./style";

const InviteForm = () => {
    const [sendMode, setSendMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSendButton = () => {
        if(!sendMode) {
            setSendMode(true)
        } else {
            setIsLoading(true)
        }
    };

    const rotate = new Animated.Value(0);
    const spin = rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    Animated.loop(    
        Animated.timing(rotate, {
            toValue:1,
            duration: 3500,
            useNativeDriver: true,
            easing: Easing.out(Easing.poly(1))
        })
    ).start();

    return (
        <View style={{justifyContent: "center", alignItems:"center"}}>
            {isLoading? (
                <>
                    <InviteText>
                        초대 메시지를 전송했습니다.
                    </InviteText>
                    <Animated.View style={{transform:[{rotate: spin}], marginBottom: 20}}>
                        <Icon source={LoadingIcon}/>
                    </Animated.View>
                    <LoadingMiniText>응답을 기다리고 있습니다.</LoadingMiniText>
                </>
            ) : (
                <>
                    <InviteText>
                        함께 우다를 사용할{"\n"}상대방을 초대해주세요.
                    </InviteText>
                    {sendMode && 
                    <PhoneInputContainer>
                        <Icon source={CalendarIcon}/>
                        <TextInput />
                    </PhoneInputContainer>
                    }
                    <SendBtn onPress={handleSendButton}>
                        <BtnText>{sendMode? "전송" : "초대"}</BtnText>
                    </SendBtn>
                </>
            )}
        </View>
    )
};

export default InviteForm;