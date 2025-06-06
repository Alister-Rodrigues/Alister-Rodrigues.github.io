import { Link } from "react-router-dom";
import MyLogo from "../../assets/icons/mylogo.svg?react";
import classes from "./uisheet.module.sass";

/* eslint-disable react/prop-types */
function Sidebar() {
  return (
    <nav className={classes.sidebar}>
      <Link to={"/"} id="side-nav-title">
        <MyLogo width="10rem" />
      </Link>
      {/* <ul>
        <NavItems to="/portfolio">Portfolio</NavItems>
      </ul> */}
      <div>
        <h1>Welcome</h1>
        <h2>I&#39;m Alister Rodrigues</h2>
      </div>
      <div></div>
    </nav>
  );
}

export default Sidebar;

function NavItems(props) {
  return (
    <li>
      <Link to={props.to} {...props}>{props.children}</Link>
    </li>
  );
}