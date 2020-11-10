//imports
import React from 'react';
import '../../styles/index.css';

const Header = () => {
  return (
    <div className="logo-pane">
      <div className="company-info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ubuntu_logo_copyleft_1.svg/1200px-Ubuntu_logo_copyleft_1.svg.png"
          alt="Human Rights First logo"
        />
        <h2 style={{ margin: 0 }}>Human Rights First</h2>
      </div>
    </div>
  );
};

export default Header;
