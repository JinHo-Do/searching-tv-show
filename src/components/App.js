import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import SearchContainer from 'containers/SearchContainer';
import ShowContainer from 'containers/ShowContainer';

const Wrapper = styled.div`
  width: 100%;
`;

const App = () => (
  <Wrapper>
    <Route path="/" component={SearchContainer} />
    <Route path="/result/:query" component={ShowContainer} />
  </Wrapper>
);

export default App;
