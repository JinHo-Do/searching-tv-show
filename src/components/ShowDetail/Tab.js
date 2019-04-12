import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  width: 33.3333%;
  font-size: 20px;
  line-height: 48px;
  text-align: center;
  cursor: pointer;
  transition: background 0.2s;
  & + & {
    border-left: 1px solid #495057;
  }
  &.active {
    background: #495057;
  }
`;

const Tab = ({ selectedTab, onClickTab, name }) => (
  <Wrapper
    className={selectedTab === name ? 'active' : ''}
    onClick={() => onClickTab(name)}
  >
    {name}
  </Wrapper>
);

export default Tab;
