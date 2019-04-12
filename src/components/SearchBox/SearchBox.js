import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 1170px;
  text-align: center;
  transition: top 0.4s;
  
  &.search-top {
    max-width: 1170px;
    top: 80px;
    input {
      width: 70%;
      height: 60px;
      font-size: 50px;
      ${media.w1024`
        font-size: 36px;
        line-height: 36px;
      `}
      ${media.w768`
        font-size: 24px;
        line-height: 24px;
        padding: 10px 10px;
      `}
      ${media.w425`
        height: 50px;
        font-size: 20px;
        line-height: 20px;
      `}
    }
    button {
      font-size: 46px;
      height: 60px;
      ${media.w1024`
        font-size: 36px;
        line-height: 36px;
      `}
      ${media.w768`
        font-size: 24px;
        line-height: 24px;
      `}
      ${media.w425`
        height: 50px;
        font-size: 20px;
        line-height: 20px;
      `}
      ${media.w375`
        font-size: 18px;
        line-height: 18px;
        padding: 10px 0px;
      `}
    }
    ${media.w425`
      top: 50px;
    `}
  }
  ${media.w425`
    width:90%;
  `}
`;

const Input = styled.input`
  width: 70%;
  height: 100px;
  text-align: center;
  color: #e9ecef;
  padding: 10px 50px;
  font-size: 50px;
  background: #212529;
  border: none;
  border-bottom: 3px solid #495057;
  transition: all 0.4s;
  ${media.w1024`
    height: 80px;
    font-size: 40px;
    padding: 10px 10px;
  `}
  ${media.w768`
    height: 60px;
    font-size: 24px;
  `}
  ${media.w425`
    height: 60px;
    font-size: 20px;
    padding: 5px 0px;
  `}
  ${media.w375`
    height: 50px;
    font-size: 18px;
  `}
`;

const Button = styled.button`
  width: 30%;
  height: 100px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  line-height: 50px;
  color: ${({ value }) => (value.length ? '#212529' : '#e9ecef')};
  background: ${({ value }) => (value.length ? '#e9ecef' : '#212529')};
  border: 3px solid #e9ecef;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    color: #212529;
    background: #e9ecef;
    border: 3px solid #adb5bd;
  }
  &:active {
    color: ${({ value }) => (value === '' ? '#e03131' : '#212529')}
    border: 3px solid #e9ecef;
  }
  ${media.w1024`
    height: 80px;
    font-size: 40px;
    line-height: 40px;
  `}
  ${media.w768`
    height: 60px;
    font-size: 24px;
    line-height: 24px;
  `}
  ${media.w425`
    height: 60px;
    font-size: 20px;
    line-height: 20px;
    padding: 0;
  `}
  ${media.w375`
    height: 50px;
    font-size: 16px;
    line-height: 16px;
  `}
`;

const SearchBox = ({
  isLoading,
  resultQuery,
  value,
  onSubmit,
  onChange,
  onKeyDown,
  setRef,
  hasResult
}) => (
  <Wrapper className={hasResult || isLoading ? 'search-top' : 'search-middle'}>
    <Input
      ref={setRef}
      name="search"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      autoComplete="off"
      placeholder={resultQuery ? `${resultQuery}` : 'SEARCH TV SHOW'}
    />
    <Button value={value} onClick={onSubmit}>
      SUBMIT
    </Button>
  </Wrapper>
);

export default SearchBox;
