import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import ShowItem from 'components/ShowItem';

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
  animation: ${opacity} 1s;
`;

const ShowList = ({ movieData }) => {
  return (
    <Wrapper>
      {movieData.map(({ show }, index) => (
        <Link to={`/show/${show.id}`} key={show.id}>
          <ShowItem
            index={index}
            name={show.name}
            image={show.image && show.image.medium}
            summary={show.summary}
            rating={show.rating}
          />
        </Link>
      ))}
    </Wrapper>
  );
};

export default ShowList;
