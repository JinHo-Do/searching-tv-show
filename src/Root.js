import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from 'store/store';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

const Layout = styled.div`
  max-width: 1920px;
  min-height: 100vh;
  width: 100%;
  height: auto;
  color: #ffffff;
  background: #212529;
  font-family: 'Lato', sans-serif;
`;

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default Root;
