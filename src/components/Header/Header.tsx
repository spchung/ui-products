import React from "react";
import "./Header.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="header">
      <header className="sub-head">
        <h1 className="h1-title">{title}</h1>
      </header>
    </div>
  );
};

export default Header;
