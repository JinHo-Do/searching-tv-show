import React from 'react';
import styled from 'styled-components';

import Tab from './Tab';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #495057;
`;

const Tabs = ({ selectedTab, onClickTab }) => (
  <Wrapper>
    <Tab name="Main" selectedTab={selectedTab} onClickTab={onClickTab} />
    <Tab name="Episodes" selectedTab={selectedTab} onClickTab={onClickTab} />
    <Tab name="Cast" selectedTab={selectedTab} onClickTab={onClickTab} />
  </Wrapper>
);

export default Tabs;
