import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from 'utils/style-utils';

import MovieItem from 'components/MovieItem';

const opacity = keyframes`
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  padding: 150px 0;
  animation: ${opacity} 1s;
  ${media.w425`
    padding: 96px 0 5px;
  `}
`;

const MovieList = ({ movieData }) => {
  return (
    <Wrapper>
      {movieData.map(({ show }, index) => (
        <MovieItem
          key={show.id}
          index={index}
          name={show.name}
          image={show.image && show.image.medium}
          summary={show.summary}
          rating={show.rating}
        />
      ))}
    </Wrapper>
  );
};

export default MovieList;
