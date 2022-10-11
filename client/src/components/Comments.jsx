import React from 'react'
import styled from 'styled-components'
import Comment from './Comment';

const Container = styled.div``;

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #999;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`;


const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src='https://avatars.githubusercontent.com/u/53614632?s=400&u=c439839ff1adc191b11165ac0c26effeb36a1f67&v=4'/>
                <Input placeholder='Add a comment...'></Input>
            </NewComment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
            <Comment></Comment>
        </Container>
    )
}

export default Comments