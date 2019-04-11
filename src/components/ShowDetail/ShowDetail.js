import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

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

const Name = styled.h1`
  font-size: 60px;
`;

const BodyWrapper = styled.div`
  display: flex;
`;

const InfoWrapper = styled.div`
  width: 30%;
`;

const Poster = styled.img`
  width: 100%;
`;

const Summary = styled.div`
  width: 70%;
  margin-top: 10px;
  padding-left: 20px;
  font-size: 20px;
  line-height: 1.4;
  word-wrap: break-word;
  p + p {
    margin-top: 20px;
  }
`;

const ShowDetail = ({ movieDetail }) => {
  const {
    name,
    language,
    genres,
    status,
    runtime,
    premiered,
    officialSite,
    schedule,
    rating: { average },
    image: { medium },
    summary
  } = movieDetail;

  return (
    <Wrapper>
      <Name>{name}</Name>
      <BodyWrapper>
        <InfoWrapper>
          <Poster src={medium} alt={name} />
          <div>{language}</div>
          <div>{status}</div>
          <div>{runtime}</div>
          <div>{premiered}</div>
          <div>{schedule.time}</div>
          <div>{schedule.day}</div>
        </InfoWrapper>
        <Summary dangerouslySetInnerHTML={{ __html: summary }} />
      </BodyWrapper>
    </Wrapper>
  );
};

export default ShowDetail;
