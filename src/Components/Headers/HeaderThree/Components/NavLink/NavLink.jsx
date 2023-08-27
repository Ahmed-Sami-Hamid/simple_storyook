// router => to be used inside the project
// import { Link } from "react-router-dom";

// libraries
import PropTypes from "prop-types";

// styling
import Style from "./NavLink.module.css";

const NavLink = ({ link, to }) => (
  <>
    {/* remember to uncomment to use in your project */}
    {/* <Link className={Style.link} activeClassName={Style.active} to={to}>
       {link}
    </Link> */}
    {/* remember to remove in your project */}
    <a className={Style.link} href={to}>
      {link}
    </a>
  </>
);

// prop-types checking
const { string } = PropTypes;

NavLink.propTypes = {
  link: string.isRequired,
  to: string.isRequired,
};

export default NavLink;
