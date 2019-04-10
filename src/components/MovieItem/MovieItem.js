import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  padding: 20px 50px 20px 0px;
  background: #343a40;
`;

const ThumbnailWrapper = styled.div`
  width: 20%;
  text-align: center;
`;

const Thumbnail = styled.img`
  width: auto;
  height: 100%;
`;

const BodyWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
`;

const Title = styled.h3`
  margin: 10px 0 20px;
  font-size: 30px;
  font-weight: bold;
`;

const Summary = styled.div`
  width: 100%;
  p:first-child {
    display: inline-block;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.6;
    height: ${1.6 * 5}em;
  }
  p {
    display: none;
  }
`;

const Rating = styled.div`
  position: absolute;
  bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const MovieItem = ({ name, index, image, summary, rating }) => {
  return (
    <Wrapper>
      <ThumbnailWrapper>
        <Thumbnail
          className="lazy-load"
          src={index <= 10 ? image : ''}
          data-src={image}
          alt="movie poster"
        />
      </ThumbnailWrapper>
      <BodyWrapper>
        <Title>{name}</Title>
        <Summary dangerouslySetInnerHTML={{ __html: summary }} />
        <Rating>RATING: {rating.average > 0 ? rating.average : 'none'}</Rating>
      </BodyWrapper>
    </Wrapper>
  );
};

export default MovieItem;
