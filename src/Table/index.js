import './styles.css';
import React from "react";


const Cell = ({children}) => {
  return <div className="cell">{children}</div>
}
const Menu = ({children}) => {
  return <div className="menu bg">{children}</div>
}

const Header = ({children}) => {
  return (<div className="header">{children}</div>)
}

export {
  Cell,
  Menu,
  Header
}