import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
  padding: 10px;
  background: #343a40;
  ${media.w425`
    padding: 15px;
    height: 180px;
  `}
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  ${media.w425`
    width: 140px;
  `}
`;

const Thumbnail = styled.img`
  display: inline-block;
  width: 100%;
  height: auto;
`;

const BodyWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  padding: 10px 20px;
  ${media.w1024`
    width: calc(100% - 200px);
  `}
  ${media.w425`
    width: calc(100% - 14px);
    padding: 5px 0 0 15px;
  `}
`;

const Title = styled.h3`
  margin: 10px 0 20px;
  font-size: 30px;
  font-weight: bold;
  ${media.w425`
    margin: 0 0 10px;
    font-size: 20px;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    width:200px;
    overflow:hidden;
  `}
`;

const Summary = styled.div`
  width: 100%;
  p:first-child {
    display: inline-block;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    word-wrap: break-word;
    line-height: 1.6;
    height: ${1.6 * 5}em;
    ${media.w425`
      font-size: 16px;
      -webkit-line-clamp: 3;
      line-height: 1.6;
      height: ${1.6 * 3}em;
    `}
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
  ${media.w425`
    font-size: 16px;
  `}
`;

const ShowItem = ({ name, index, image, summary, rating }) => {
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

export default ShowItem;
