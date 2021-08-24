import React from 'react';
import styled from 'styled-components';
import image from '../assets/img/background.jpg';
import Card from '../components/layout/Card';

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
          <div className="Background-form">
            <div className="form-control-Background">
              <span>Email</span>
              <input type="email" placeholder="username" />
            </div>
            <div className="form-control-Background">
              <span>Password</span>
              <input type="password" placeholder="password" />
            </div>
          </div>
        </Card>
      </MainContainer>
    </Background>
  );
}
