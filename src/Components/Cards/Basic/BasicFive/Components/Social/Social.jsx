// styling
import Style from "./Social.module.css";

// libraries
import PropTypes from "prop-types";

const Social = ({ socialIcon, socialLink }) => {
  return (
    <a
      className={Style.social}
      href={socialLink}
      target="_blank"
      rel="noreferrer"
    >
      {socialIcon}
    </a>
  );
};

// prop-types checking
const { string, node } = PropTypes;

Social.propTypes = {
  socialIcon: node.isRequired,
  socialLink: string.isRequired,
};

export default Social;
