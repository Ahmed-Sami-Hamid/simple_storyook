// libraries
import PropTypes from "prop-types";

// styling
import Style from "./BurgerMenu.module.css";

const BurgerMenu = ({ isActive }) => {
  return (
    <div className={Style.BurgerIcon}>
      <div className={isActive ? Style.TopSlice : ""}></div>
      <div className={isActive ? Style.MidSlice : ""}></div>
      <div
        className={!isActive ? Style.BottomSlice : Style.BottomSliceActive}
      ></div>
    </div>
  );
};

// prop-types checking
const { bool } = PropTypes;

BurgerMenu.propTypes = {
  isActive: bool.isRequired,
};

export default BurgerMenu;
