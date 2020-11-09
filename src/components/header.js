//imports
import React from 'react';
import { Button, Layout } from 'antd';
import logo from '../assets/hrf-logo.png';
import styled from 'styled-components';

const Div = styled.div`
  .logo {
    width: 20%;
  }
  /* .header__company-info {
    display: flex;
    flex-direction: row;
    & img {
      max-height: 100%;
      max-width: 100%;
    } */
  /* } */
`;

const { Header } = Layout;
const NavBar = () => {
  return (
    <Div>
      <Layout className="layout">
        <Header>
          <div className="logo">
            <img src={logo} alt="Human Rights First logo" />
          </div>
        </Header>
      </Layout>
    </Div>
  );
};
export default NavBar;
