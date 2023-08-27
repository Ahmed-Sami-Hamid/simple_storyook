// libraries
import PropTypes from "prop-types";

// styling
import Style from "./BasicOne.module.css";

const List1 = ({
  image = <img src="https://via.placeholder.com/100x100.webp" alt="" />,
  children,
}) => {
  return (
    <div className={Style.list}>
      <div className={Style.image}>{image}</div>
      <div className={Style.content}>
        {children ? (
          children
        ) : (
          <>
            <h4 className={Style.heading}>Lorem Ipsum</h4>
            <p className={Style.caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

const { any } = PropTypes;

List1.propTypes = {
  image: any,
};

export default List1;
