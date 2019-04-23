import React from 'react';
import styled from 'styled-components';

import ShowCast from 'components/ShowCast';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const ShowCastList = ({ cast }) => (
  <Wrapper>
    {cast.map(actor => (
      <ShowCast key={actor.person.id} actor={actor} />
    ))}
  </Wrapper>
);

export default ShowCastList;
