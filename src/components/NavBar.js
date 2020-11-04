import React from 'react';
import { Button, Layout } from 'antd';

const { Header } = Layout;
const NavBar = () => {
  return (
    <Header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 10px',
        overflow: 'hidden',
      }}
    >
      <div className="company-info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ubuntu_logo_copyleft_1.svg/1200px-Ubuntu_logo_copyleft_1.svg.png"
          alt="Human Rights First logo"
          style={{
            width: 50,
            height: 50,
          }}
        />
        <h3 style={{ color: 'white' }}>Human Rights First</h3>
      </div>
      <div className="user-nav">
        <Button type="primary" shape="round" style={{ margin: 3 }}>
          Sign in
        </Button>
        <Button type="primary" shape="round" style={{ margin: 3 }}>
          Sign up
        </Button>
      </div>
    </Header>
  );
};
export default NavBar;
