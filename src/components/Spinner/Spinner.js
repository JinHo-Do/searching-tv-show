import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = ({ type }) => (
  <Wrapper>
    <Loader type={type} color="#00BFFF" height="100" width="100" />
  </Wrapper>
);

export default Spinner;
