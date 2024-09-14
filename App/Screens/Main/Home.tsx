import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
`;

const Home = () => {
    return (
        <Container>
            <Text>enfp 이용민</Text>
            <Text>istj 윈터</Text>
            <Text>사랑한지 152일째</Text>
            <Text>사랑한지 152일째</Text>
        </Container>
    )
}

export default Home;