import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

import Tabs from './Tabs';
import Main from './Main';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1170px;
  width: 100%;
  top: 150px;
  margin: 0 auto;
  padding: 20px;
  background: #343a40;
  ${media.w425`
    top: 96px;
  `}
`;

const ShowDetail = ({ movieDetail }) => {
  const [selectedTab, onClickTab] = useState('Main');

  return (
    <Wrapper>
      <Tabs selectedTab={selectedTab} onClickTab={tab => onClickTab(tab)} />
      <Main selectedTab={selectedTab} movieDetail={movieDetail} />
    </Wrapper>
  );
};

export default ShowDetail;
