// components
import ThemeWrapper from "../../../Components/ThemeWrapper/ThemeWrapper";
import Spacer from "../../UI-Kit/Spacer/Spacer";
// ui-kit
import { Button } from "@hybris-software/ui-kit";

// libraries
import PropTypes from "prop-types";

// styling
import Style from "./ContactOne.module.css";

const ContactOne = ({
  heading = "Lorem ipsum dolor!",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cta = "Lorem ipsum",
}) => {
  return (
    <ThemeWrapper>
      <div className={Style.contact}>
        <Spacer lg />
        <h3 className={Style.heading}>{heading}</h3>
        <Spacer sm />
        <p className={Style.content}>{content}</p>
        <Spacer md />
        <Button className={Style.cta}>{cta}</Button>
        <Spacer lg />
      </div>
    </ThemeWrapper>
  );
};

// prop-types checking
const { string } = PropTypes;

ContactOne.propTypes = {
  heading: string.isRequired,
  content: string.isRequired,
  cta: string.isRequired,
};

export default ContactOne;
