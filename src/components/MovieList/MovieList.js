import React from 'react';
import styled, { keyframes } from 'styled-components';
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
`;

const MovieList = ({ movieData }) => {
  return (
    <Wrapper>
      {movieData.map((movie, index) => (
        <MovieItem
          key={movie.show.id}
          index={index}
          name={movie.show.name}
          image={movie.show.image && movie.show.image.medium}
          summary={movie.show.summary}
          rating={movie.show.rating}
        />
      ))}
    </Wrapper>
  );
};

export default MovieList;
