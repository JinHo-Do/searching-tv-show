import React from 'react';
import styled from 'styled-components';

import TabItem from './TabItem';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #495057;
`;

const Tabs = ({ selectedTab, onClickTab }) => (
  <Wrapper>
    <TabItem name="Main" selectedTab={selectedTab} onClickTab={onClickTab} />
    <TabItem
      name="Episodes"
      selectedTab={selectedTab}
      onClickTab={onClickTab}
    />
    <TabItem name="Cast" selectedTab={selectedTab} onClickTab={onClickTab} />
  </Wrapper>
);

export default Tabs;
