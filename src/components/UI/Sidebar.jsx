import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Sidebar() {
  return (
    <nav className="sidebar">
      <Link to={"/"} id="side-nav-title">Alister <br />Rodrigues</Link>
      <ul>
        <NavItems to="/portfolio">Portfolio</NavItems>
        <NavItems to="/blog">Blog</NavItems>
      </ul>
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