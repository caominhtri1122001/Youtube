import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #999;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;
`

const Text = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`

const Comment = () => {
    return (
        <Container>
            <Avatar src='https://avatars.githubusercontent.com/u/53614632?s=400&u=c439839ff1adc191b11165ac0c26effeb36a1f67&v=4'/>
            <Details>
                <Name>Cao Minh Tri <Date>1 day ago</Date></Name>
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt culpa placeat tenetur dolore magni facere necessitatibus quod aliquid! At eius tenetur officiis fugit? Ipsa, animi eaque provident nostrum unde minima.  
                </Text>
            </Details>
        </Container>
    )
}

export default Comment