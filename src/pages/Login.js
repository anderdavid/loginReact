import React from 'react';
import styled from 'styled-components';
import image from '../assets/img/background.jpg';
import Card from '../components/layout/Card';
import EmailInput from '../components/Inputs/EmailInput';
import PasswordInput from '../components/Inputs/PasswordInput';
import SubmitButton from '../components/Inputs/SubmitButton';

const Background = styled.div`
  background-image: url(${image});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;
  position: absolute;
  height: 100%;
  width: 100%;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
`;

export default function Login() {
  return (
    <Background>
      <MainContainer>
        <Card>
          <h1>Login:</h1>
          <EmailInput />
          <PasswordInput />
          <SubmitButton label={'Login'} />
        </Card>
      </MainContainer>
    </Background>
  );
}
