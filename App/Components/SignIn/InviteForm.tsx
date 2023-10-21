import React from "react";
import { InviteText, SendBtn, BtnText } from "../../Screens/SignIn/style";
import { View } from "react-native";

const InviteForm = () => {
    return (
        <View style={{justifyContent: "center", alignItems:"center"}}>
            <InviteText>
                함께 우다를 사용할{"\n"}상대방을 초대해주세요.
            </InviteText>
            <SendBtn>
                <BtnText>초대</BtnText>
            </SendBtn>
        </View>
    )
};

export default InviteForm;