import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

const Wrapper = styled.div`
  width: 25%;
  padding: 15px 10px;
  ${media.w425`
    width: 50%;
  `}
`;

const CharacterImage = styled.img`
  width: 100%;
`;

const Name = styled.div`
  margin-top: 3px;
`;

const ShowCast = ({ actor: { character, person } }) => (
  <Wrapper>
    <CharacterImage src={character.image && character.image.medium} />
    <Name>{person.name}</Name>
  </Wrapper>
);

export default ShowCast;
