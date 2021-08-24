import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

export default function Card(props) {
  const { children } = props;
  return (
    <Container className="card">
      <div className="card-content">
        <div className="content">{children}</div>
      </div>
    </Container>
  );
}
