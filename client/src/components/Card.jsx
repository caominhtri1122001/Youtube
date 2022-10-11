import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`

const Image = styled.img`
    width: 100%;
    height: ${(props) => props.type === "sm" ? "100px" : "202px"};
    background-color: #999;
    flex: 1;
`

const Details = styled.div`
    display: flex;
    margin-top:  ${(props) => props.type !== "sm" && "16px"};
    gap: 12px;
    flex: 1;
`

const ChannelImage = styled.img`
   width: 36px;
   height: 36px;
   border-radius: 50%;  
   background-color: white;
   display: ${(props) => props.type === "sm" && "none"};
`

const Texts = styled.div``;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 900;
    color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 9px 0px;
`;
const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`;


const Card = ({type}) => {
    return (
        <Link to="/video/test" style={{textDecoration:"none"}}>
            <Container type={type}>
                <Image type={type} src='https://img.nhandan.com.vn/Files/Images/2021/04/13/3A708284_F5B8_407D_ADC0_339DBEE-1618275907021.jpeg'/>
                <Details type={type}>
                    <ChannelImage type={type} src='https://avatars.githubusercontent.com/u/53614632?s=400&u=c439839ff1adc191b11165ac0c26effeb36a1f67&v=4' />
                    <Texts >
                        <Title>Test Video</Title>
                        <ChannelName>CT Dev</ChannelName>
                        <Info>789,098 views . 1 day ago</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default Card