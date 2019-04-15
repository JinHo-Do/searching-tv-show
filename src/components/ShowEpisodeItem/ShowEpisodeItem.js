import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  padding: 10px;
  background: #495057;
  ${media.w425`
    flex-direction: column;
    padding: 15px;
  `}
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  ${media.w425`
    width: 100%;
    padding: 10px 20px;
  `}
`;

const Thumbnail = styled.img`
  display: inline-block;
  width: 100%;
  height: auto;
  ${media.w425`
  margin-top: 0;
  `}
`;

const BodyWrapper = styled.div`
  position: relative;
  width: 70%;
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
  `}
`;

const Summary = styled.div`
  display: inline-block;
  width: 100%;
  line-height: 1.4;
  font-size: 20px;
  ${media.w425`
    font-size: 16px;
  `}
`;

const AirDate = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

const ShowEpisodeItem = ({ episode, index }) => {
  const { name, season, number, airdate, image, summary } = episode;

  return (
    <Wrapper>
      <ThumbnailWrapper>
        <Thumbnail
          className={index <= 10 ? '' : 'lazy-load'}
          src={index <= 10 ? image && image.medium : '#'}
          data-src={image && image.medium}
          alt="movie poster"
        />
      </ThumbnailWrapper>

      <BodyWrapper>
        <Title>{`${name} - S${season}E${number}`}</Title>
        <Summary dangerouslySetInnerHTML={{ __html: summary }} />
        <AirDate>Air Date: {airdate}</AirDate>
      </BodyWrapper>
    </Wrapper>
  );
};

export default ShowEpisodeItem;
