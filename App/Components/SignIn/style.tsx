import { Animated, View } from "react-native";
import styled from "styled-components/native";

export const InputContainer: any = styled.View`
  margin-top: ${(props: any) => props.topSpace};
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-radius: 1px;
  border-color: #B9B9B9;
  width: 100%;
  height: 50px;
`;

export const TextInput = styled.TextInput`
  width: 60%;
  margin: 0px 10px;
  font-size: 15px;
  font-family: 'MICEGothicBold';
`;

export const Icon = styled.Image``;

export const LogInBtn = styled.TouchableOpacity`
  background-color: #0ABAB5;
  border-radius: 5px;
  justify-content: center;
  margin-top: 50px;
  padding: 5px 30px;
  align-items: center;
  margin-bottom: 50px;
`;

export const SendBtn = styled.TouchableOpacity`
  background-color: #0ABAB5;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 100;
`;

export const BtnText = styled.Text`
  color: white;
  font-size: 17px;
  font-family: 'MICEGothicBold';
  letter-spacing: 2px;
`;

export const AuthCntText = styled.Text`
  color: grey;
  font-size: 17px;
  font-family: 'MICEGothicBold';
  letter-spacing: 2px;
`;

export const FooterText = styled.Text`
  font-size: 16px;
  font-family: 'MICEGothicBold';
  color: white;
  padding-right: 5px;
  letter-spacing: 1.2px;
`;

export const SignInBtn = styled.TouchableOpacity`
`;

export const SignInText = styled.Text`
  font-size: 16px;
  font-family: 'MICEGothicBold';
  color: #335E5C;
  letter-spacing: 1.2px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  flex: 1;
  margin-bottom: 10px;
`;

export const ProfileWrapper = styled.TouchableOpacity`
  padding: 30px 0px;
`;

export const PhoneInputContainer = styled.View`
  background-color: black;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const LoadingMiniText = styled.Text`
  font-size: 12px;
  font-family: 'MICEGothicBold';
  letter-spacing: 1px;
`