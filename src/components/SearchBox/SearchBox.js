import React from 'react';
import styled from 'styled-components';

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
    }
    button {
      height: 60px;
    }
  }
`;

const Input = styled.input`
  width: 70%;
  height: 100px;
  text-align: center;
  color: #e9ecef;
  padding: 10px 50px;
  font-size: 50px;
  line-height: 50px;
  background: #212529;
  border: none;
  border-bottom: 3px solid #495057;
  transition: all 0.4s;
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
`;

const SearchBox = ({
  onChange,
  value,
  onSubmit,
  onKeyDown,
  setRef,
  hasResult,
  resultQuery,
  length
}) => (
  <Wrapper className={hasResult ? 'search-top' : 'search-middle'}>
    <Input
      ref={setRef}
      name="search"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={
        hasResult ? `${resultQuery}에 대한 ${length}개의 결과` : 'SEARCH'
      }
      autoComplete="off"
    />
    <Button value={value} onClick={onSubmit}>
      SUBMIT
    </Button>
  </Wrapper>
);

export default SearchBox;
