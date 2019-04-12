import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background: #495057;
  padding: 20px;
`;

const Name = styled.h1`
  font-size: 60px;
  margin-top: 10px;
`;

const BodyWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const InfoWrapper = styled.div`
  width: 30%;
`;

const Poster = styled.img`
  width: 100%;
`;

const Summary = styled.div`
  width: 70%;
  padding-left: 20px;
  font-size: 20px;
  line-height: 1.4;
  word-wrap: break-word;
  p + p {
    margin-top: 20px;
  }
`;

const Info = styled.p`
  font-size: 14px;
  margin-top: 10px;
  &.official-site {
    font-size: 16px;
    color: #4263eb;
  }
`;

const Main = ({ movieDetail }) => {
  const {
    name,
    language,
    status,
    runtime,
    premiered,
    officialSite,
    image,
    summary
  } = movieDetail;

  return (
    <Wrapper>
      <Name>{name}</Name>
      <BodyWrapper>
        <InfoWrapper>
          {image && <Poster src={image.medium} alt={name} />}
          <Info className="official-site">
            <a
              href={officialSite}
              target="_blank"
              rel="noopener noreferrer"
              alt="official_site"
            >
              <strong>Visit official site </strong>
            </a>
          </Info>
          <Info>
            <strong>Language: </strong>
            {language}
          </Info>
          <Info>
            <strong>Status: </strong>
            {status}
          </Info>
          <Info>
            <strong>Runtime: </strong>
            {runtime}
          </Info>
          <Info>
            <strong>Premiered: </strong>
            {premiered}
          </Info>
        </InfoWrapper>
        <Summary dangerouslySetInnerHTML={{ __html: summary }} />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Main;
