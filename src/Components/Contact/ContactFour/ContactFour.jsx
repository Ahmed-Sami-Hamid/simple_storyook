// components
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import Spacer from "../../UI-Kit/Spacer/Spacer";
// ui-kit
import { Button } from "@hybris-software/ui-kit";
// libraries
import PropTypes from "prop-types";

// icons
import { FiArrowDownRight } from "react-icons/fi";

// styling
import Style from "./ContactFour.module.css";

const ContactFour = ({
  heading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cta = "Lorem ipsum",
}) => {
  return (
    <ThemeWrapper>
      <div className={Style.contact}>
        <Spacer lg />
        <h3 className={Style.heading}>{heading}</h3>
        <Spacer md />
        <Button className={Style.cta}>
          <FiArrowDownRight />
          {cta}
        </Button>
        <Spacer lg />
      </div>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

ContactFour.propTypes = {
  heading: string.isRequired,
  cta: string.isRequired,
};

export default ContactFour;
