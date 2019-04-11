import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import SearchContainer from 'containers/SearchContainer';
import ShowListContainer from 'containers/ShowListContainer';
import ShowDetailContainer from 'containers/ShowDetailContainer';

const Wrapper = styled.div`
  width: 100%;
`;

const App = () => (
  <Wrapper>
    <Route path="/" component={SearchContainer} />
    <Route path="/result/:query" component={ShowListContainer} />
    <Route path="/show/:id" component={ShowDetailContainer} />
  </Wrapper>
);

export default App;
