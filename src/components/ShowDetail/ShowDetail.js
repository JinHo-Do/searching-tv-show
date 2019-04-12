import React, { useState } from 'react';
import styled from 'styled-components';

import ShowDetailTabs from 'components/ShowDetailTabs';
import ShowEpisodes from 'components/ShowEpisodes';
import Main from './Main';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background: #343a40;
`;

const ShowDetail = ({ movieDetail }) => {
  const [selectedTab, onClickTab] = useState('Main');

  return (
    <Wrapper>
      <ShowDetailTabs
        selectedTab={selectedTab}
        onClickTab={tab => onClickTab(tab)}
      />
      {selectedTab === 'Main' && <Main movieDetail={movieDetail} />}
      {selectedTab === 'Episodes' && (
        <ShowEpisodes
          episodes={movieDetail._embedded && movieDetail._embedded.episodes}
        />
      )}
    </Wrapper>
  );
};

export default ShowDetail;
