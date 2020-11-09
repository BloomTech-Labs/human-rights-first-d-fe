//imports
import React from 'react';
import { Button, Layout } from 'antd';
// import styled from 'styled-components';

// const Layout = styled.div`
//   h3 {
//     /* color: #fff8fb; */
//     color: black;
//     margin-top: 4%;
//     font-family: 'Playfair Display', serif;
//   }

//   header {
//     flex: 0 0 auto;
//     height: 64px;
//     padding: 0 50px;
//     color: rgba(0, 0, 0, 0.85);
//     line-height: 64px;
//     background: #001529;
//   }

//   /* .header__company-info {
//     display: flex;
//     flex-direction: row;
//     & img {
//       max-height: 100%;
//       max-width: 100%;
//     } */
//   /* } */
// `;

const { Header } = Layout;
const NavBar = () => {
  return (
    <Layout className="layout">
      <Header>
        <section className="header__company-info">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ubuntu_logo_copyleft_1.svg/1200px-Ubuntu_logo_copyleft_1.svg.png"
              alt="Human Rights First logo"
            />
            <p>Human Rights First</p>
          </div>
        </section>
      </Header>
    </Layout>
  );
};
export default NavBar;
